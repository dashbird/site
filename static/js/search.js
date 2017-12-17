let lunrIndex,
$results,
pagesIndex;

function initLunr() {
  $.getJSON("/index.json")
  .done(function(index) {
    pagesIndex = index;

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
    let err = textStatus + ", " + error;
    console.error("Error getting Hugo index file:", err);
  });
}

function initUI() {
  $results = $('#search-results');
  $searchText = $('#search-text');
  $searchButton = $('#submit-search');
  $searchText.keyup(function(event) {
    if (event.keyCode === 13) $searchButton.click();
  });
  $searchButton.on('click', function() {
    $results.empty();
    const query = $searchText.val();
    if (query.length < 2) {
      return;
    }
    const results = search(query);
    renderResults(results);
  });
}

function search(query) {
  return lunrIndex.search(query).map(function(result) {
    console.log(result);
    return pagesIndex.filter(function(page) {
      console.log(page);
      return page.url === result.ref;
    })[0];
  });
}

function renderOneResult(result) {
  return `<div class='text-left mb-2'>
       <span class="h5"><a href='${result.url}'>${result.title}</a></span>
       <p>${result.content.substr(1, 100).trim()}...</p>
    </div> `;
}

function renderResults(results) {
  if (!results.length) {
    return;
  }
  const matches = results.slice(0, 10);
  $results.append(`<p>Found ${matches.length} results.</p>`);
  matches.forEach(function(result) {
    let $result = $('<div class="text-left">');
    $result.append(renderOneResult(result));
    $results.append($result);
  });
}

initLunr();

$(document).ready(function() {
  initUI();
});
