$(document).ready(function(){
  $('#navigation').on('show.bs.collapse', function() {
    $('nav').addClass('collapsedfully');
    $('html, body').css({ overflow: 'hidden', height: '100%' });
  });
  $('#navigation').on('hide.bs.collapse', function() {
    $('nav').removeClass('collapsedfully');
    $('html, body').css({ overflow: 'auto', height: 'auto' });
  });

  function renderPrices(period) {
    console.log('period', period);
    $('#pro').text(period === 'ANNUAL' ? '$299' : '$350');
    $('#enterprise').text(period === 'ANNUAL' ? '$599' : '$700');
    $('#startup').text(period === 'ANNUAL' ? '$99' : '$115');
    $('#basic').text(period === 'ANNUAL' ? '$24' : '$29');
    $('.condition').text(period === 'ANNUAL' ? 'per month / billed yearly' : 'per month');
  }
  $('.toggle span').on('click', function() {
    $(this).parent().children('.active').removeClass('active');
    $(this).addClass('active');
    renderPrices($(this).text());
  });

  $('.clickable').on('click', function () {
    window.open($(this).find("a:first").attr("href"), "_self");
  });

  $('.clickable-blank').on('click', function () {
    event.preventDefault();
    window.open($(this).find("a:first").attr("href"), "_blank");
  });

  $('ul.sidemenu li a').on('click', function(){
    $(this).parent('li').toggleClass('active');
  });
});
