let lunrIndex,
$results,
pagesIndex;

function initLunr() {
  $.getJSON("/index.json")
  .done(function(index) {
    pagesIndex = index;
    console.log("index:", pagesIndex);

    lunrIndex = lunr(function() {
      this.field("title");
      this.field("tags");
      this.field("content");
      this.ref("url");
      const that = this;
      pagesIndex.forEach(function(page) {
        that.add(page);
      });
    });

  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.error("Error getting Hugo index file:", err);
  });
}

function initUI() {
  $results = $("#results");
  $("#search").keyup(function() {
    $results.empty();
    const query = $(this).val();
    if (query.length < 2) {
      return;
    }

    const results = search(query);
    console.log(results);

    renderResults(results);
  });
}

function search(query) {
  return lunrIndex.search(query).map(function(result) {
    return pagesIndex.filter(function(page) {
      return page.url === result.ref;
    })[0];
  });
}

function renderResults(results) {
  if (!results.length) {
    return;
  }
  results.slice(0, 10).forEach(function(result) {
    var $result = $("<li>");
    console.log(result);
    $result.append($("<a>", {
      href: result.uri,
      text: "» " + result.title
    }));
    $results.append($result);
  });
}

initLunr();

$(document).ready(function() {
  initUI();
});
