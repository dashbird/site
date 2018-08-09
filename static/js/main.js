/* eslint-env jquery */

$(document).ready(function () {
  $('#navigation').on('show.bs.collapse', function () {
    $('nav').addClass('collapsedfully')
    $('html, body').css({ overflow: 'hidden', height: '100%' })
  })
  $('#navigation').on('hide.bs.collapse', function () {
    $('nav').removeClass('collapsedfully')
    $('html, body').css({ overflow: 'auto', height: 'auto' })
  })

  function renderPrices (period) {
    console.log('period', period)
    $('#pro').text(period === 'ANNUAL' ? '$299' : '$350')
    $('#enterprise').text(period === 'ANNUAL' ? '$599' : '$700')
    $('#startup').text(period === 'ANNUAL' ? '$99' : '$115')
    $('#basic').text(period === 'ANNUAL' ? '$24' : '$29')
    $('.condition').text(period === 'ANNUAL' ? 'per month / billed yearly' : 'per month')
  }
  $('.toggle span').on('click', function () {
    $(this).parent().children('.active').removeClass('active')
    $(this).addClass('active')
    renderPrices($(this).text())
  })

  $('.clickable').on('click', function () {
    window.open($(this).find('a:first').attr('href'), '_self')
  })

  $('.clickable-blank').on('click', function (event) {
    event.preventDefault()
    window.open($(this).find('a:first').attr('href'), '_blank')
  })

  $('ul.sidemenu li a').on('click', function () {
    $(this).parent('li').toggleClass('current-subject')
  })

  // full image width
  const contentWidth = $('.article-blog-wrap').width()
  $.each($('.article-full-width'), () => {
    var margin = ($(this).width() - contentWidth - 30) / 2
    $(this).css('margin-left', margin)
    $(this).css('margin-right', margin)
  })

  // Allows bootstrap carousels to display 3 items per page rather than just one
  $('#carousel-example-multi').on('slide.bs.carousel', (e) => {
    const $e = $(e.relatedTarget)
    const idx = $e.index()
    const itemsPerSlide = 4
    const totalItems = $('.carousel-item').length

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx)
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction === 'left') {
          $('.carousel-item').eq(i).appendTo('.carousel-inner')
        } else {
          $('.carousel-item').eq(0).appendTo('.carousel-inner')
        }
      }
    }
  })

  $('.smart-tabs a').click(function(event){
      $(this).closest('.smart-tabs').find('dt').removeClass('current'),
      $(this).closest('.smart-tabs').find('dd').removeClass('current'),
      $(this).parent().addClass('current');
      $(this).parent().parent().find('dd').addClass('current');
      return false;
    });
  if ($(window).width() > 767) {
    $('#carousel-example-multi').carousel({ interval: 4000 })
    
  }
})
