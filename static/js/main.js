/* eslint-env jquery */

$('.card-title').on('click', function() {
  $(this).parents('.card').toggleClass('blue-active');
})

$('.pricing-resources-link').on('click', function() {
  $('#headingResources').parents('.card').addClass('blue-active');
  $( "#collapseResources" ).scroll();
  $('#collapseResources').collapse('show');
})

/* signup popup */

var $sideMenu = document.querySelector('#side-menu')
var $overlay = document.querySelector('#overlay')
var hashTriggers = ['#menu', '#login', '#register']
checkHash()

$sideMenu.classList.add('register')

window.onpopstate = checkHash

function checkHash () {
  const hash = window.location.hash;
  if(document.querySelector('#side-menu')==null)
  {
    $sideMenu = document.querySelector('#navigation');
  }
  else{
    if (hashTriggers.find(function (str) { return str === hash })) {
      $sideMenu.className = 'show'
      $overlay.classList.add('show')
      switch (hash) {
        case '#menu':
          $sideMenu.classList.add('menu')
          break
        case '#login':
          $sideMenu.classList.add('login')
          break
        case '#register':
          $sideMenu.classList.add('register')
          break
      }
    } else if (hash === '') {
      if($sideMenu!=null)
      $sideMenu.className = '';
      if($overlay!=null)
      $overlay.className = ''
    }
  }
}

function removeHash () {
  var state = ''
  var popStateEvent = new PopStateEvent('popstate', { state: state })
  history.pushState(state, document.title, window.location.pathname + window.location.search)
  dispatchEvent(popStateEvent)
}

$(document).ready(function () {
  const openArrow = '↑'
  const closeArrow = '↓'

  function smoothVisibility (li) {
    const $content = $(li).children('.description')
    const $arrow = $(li).find('.product-heading > span')
    $arrow.html(openArrow)
    $content.hasClass('hide') ? $content.removeClass('hide') : $content.addClass('hide')
  }

  function snapVisibility (li, show) {
    const $content = $(li).children('.description')
    const $arrow = $(li).find('.product-heading > span')
    $arrow.html(show ? openArrow : closeArrow)
    show ? $content.removeClass('hide') : $content.addClass('hide')
  }

  function closeAllOf (ul) {
    $(ul).children('li').each(function () {
      snapVisibility(this, false)
    })
  }

  $('.product-heading').on('click', function () {
    closeAllOf($(this).parent().parent())
    smoothVisibility($(this).parent(), true)
  })

  $('#navigation').on('show.bs.collapse', function () {
    $('nav').addClass('collapsedfully')
    $('html, body').css({ overflow: 'hidden', height: '100%' })
  })
  $('#navigation').on('hide.bs.collapse', function () {
    $('nav').removeClass('collapsedfully')
    $('html, body').css({ overflow: 'auto', height: 'auto' })
  })

  $('.clickable').on('click', function () {
    window.open($(this).find('a:first').attr('href'), '_self')
  })

  $('.clickable-blank').on('click', function (event) {
    event.preventDefault()
    window.open($(this).find('a:first').attr('href'), '_blank')
  })

  $('ul.sidemenu li a').on('click', function () {
    // $(this).parent('li').toggleClass('current-subject')
  })

  // full image width
  const contentWidth = $('.article-blog-wrap').width()
  $.each($('.article-full-width'), () => {
    var margin = ($(this).width() - contentWidth - 30) / 2
    $(this).css('margin-left', margin)
    $(this).css('margin-right', margin)
  })

  // acordion - add collapse class for all items
  $.each($('.accordion .card'), function (index, value) {
    if ($(this).find('.collapse').hasClass('hide')) {
      $(this).find('.card-header').find('h5').addClass('collapsed')
    }
  })

  var $videoSrc;
  $('.video-btn').click(function() {
    $videoSrc = $(this).data("src")
  })

  $('#demoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&amp;autoplay=1")
  })

  $('#demoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc)
  })

  // blog-detailed CTA form
  if ($(window).width() < 1023) {
    $('body .blog-cta').insertBefore('.blog-cta__mobile')

    $('body .blog-cta__mobile').on('click', '.blog-cta__mobile-close', function (e) {
      $(this).parents('.blog-cta__mobile').addClass('inactive')
    })

    $('body .blog-cta__mobile').on('click', '.blog-cta__btn-modal', function (e) {
      $('body').find('.blog-cta').toggleClass('modal')
      $('body').toggleClass('overflow-hidden')
    })

    $(document).click(function (event) {
      if (!$(event.target).closest('.blog-cta__form, .blog-cta__btn-modal').length) {
        if ($('body').find('.blog-cta').hasClass('modal')) {
          $('body').find('.blog-cta').toggleClass('modal')
          $('body').toggleClass('overflow-hidden')
        }
      }
    })
  }

  $('body .blog-cta').on('click', '.blog-cta__btn-close', function (e) {
    if ($(window).width() > 1023) {
      $(this).parents('.blog-cta').addClass('inactive')
    } else {
      $('body').find('.blog-cta').toggleClass('modal')
      $('body').toggleClass('overflow-hidden')
    }
  })
})

//hello
let tl = new TimelineMax()
tl.set('.hero-info', {autoAlpha: 1})
  .staggerFromTo('.hero-info div > *', 1, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Power4.easeOut
  }, 0.1)

// Randomize promo messages at the top bar
function promoMessage () {
  const messages = [
    {
      'text': 'Watch Tech Talks on AWS Lambda: Debugging, Security, and more!',
      'url': 'https://github.com/dashbird/techtalks'
    },
    {
      'text': 'Download our free e-book now: "Serverless Best Practices"',
      'url': 'https://dashbird.io/serverless-benefits/?utm_source=dashbird-site&utm_medium=top-bar-promo&utm_campaign=case-study'
    },
    {
      'text': 'Case Study: Migrating Legacy and Going Serverless',
      'url': 'https://dashbird.io/shamrock-case-study/?utm_source=dashbird-site&utm_medium=top-bar-promo&utm_campaign=case-study'
    },
    {
      'text': 'Case Study: Improve Visibility and Application Health',
      'url': 'https://dashbird.io/blow-ltd-case-study/?utm_source=dashbird-site&utm_medium=top-bar-promo&utm_campaign=case-study'
    },
    {
      'text': 'Check out the Cloud Knowledge Base',
      'url': 'https://dashbird.io/knowledge-base/?utm_source=dashbird-site&utm_medium=top-bar-promo&utm_campaign=knowledge-base'
    }
  ]

  let $message = document.querySelector('p.top-bar-promo span')
  let $anchor = document.querySelector('p.top-bar-promo a')
  let pickedMsg = messages[ Math.floor(Math.random() * messages.length) ]

  if ($message && $anchor && pickedMsg) {
    $message.textContent = pickedMsg.text
    $anchor.href = pickedMsg.url
  }
}

// promoMessage()
