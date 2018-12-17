/* eslint-env jquery */
/* global lunr */

let lunrIndex, $results, $resultsContainer, pagesIndex, $searchText, $searchButton, $nonResults, $backToArticle

function initLunr () {
  $.getJSON('/js/docs.json') // major hack - find a better way to do this
    .done(function (index) {
      pagesIndex = index
      pagesIndex.forEach(function (page) {
        page.uri = page.uri.replace('/content', '')
      })

      lunrIndex = lunr(function () {
        this.field('tags')
        this.field('content')
        this.ref('uri')
        const that = this
        pagesIndex.forEach(function (page) {
          that.add(page)
        })
      })
    })
    .fail(function (jqxhr, textStatus, error) {
      let err = textStatus + ', ' + error
      console.log(err)
    })
}

function initUI () {
  $resultsContainer = $('#search-results-row')
  $results = $('#search-results')
  $resultsEmpty = $('#results-empty')
  $searchText = $('#search-text')
  $searchButton = $('#submit-search')
  $nonResults = $('#non-results')
  $backToArticle = $('#back-to-article')

  $searchText.keyup(function (event) {
    if (event.keyCode === 13) $searchButton.click()
  })

  $searchButton.on('click', function () {
    $results.empty()
    const query = $searchText.val()
    if (query.length < 2) {
      return
    }
    const results = search(query)
    renderResults(results)
  })

  $backToArticle.on('click', function() {
    $resultsContainer.addClass('d-none')
    $nonResults.removeClass('d-none')
  })
}

function search (query) {
  return lunrIndex.search(query).map(function (result) {
    return pagesIndex.filter(function (page) {
      return page.uri === result.ref
    })[0]
  })
}

function renderOneResult (result) {
  let contentArray = result.content.split('---')
  let meta = contentArray[1]
  let content = contentArray[2]
  let title = meta.split('linktitle: ')[1].split('\n')[0]
  return `<div class='text-left mb-2'>
       <span class="h5"><a href='${result.uri}'>${title}</a></span>
       <p>${content.substr(1, 100).trim()}...</p>
    </div> `
}

function renderResults (results) {
  $resultsContainer.removeClass('d-none')
  $nonResults.addClass('d-none')

  if (!results.length) {
    $resultsEmpty.removeClass('d-none')
    return
  } else {
    $resultsEmpty.addClass('d-none')
  }
  const matches = results.slice(0, 10)

  $results.append(`<p>Found ${matches.length} results.</p>`)
  matches.forEach(function (result) {
    let $result = $('<div class="text-left">')
    $result.append(renderOneResult(result))
    $results.append($result)
  })

}

initLunr()

$(document).ready(function () {
  initUI()
})
