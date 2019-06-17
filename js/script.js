$(document).ready(function(){

  var open = $('.burger-menu');
  var menu = $('.mobile_menu-container');
  var burgerIcon = $('#burger_icon');
  var closeIcon = $('#close_icon');

  var featureLinks = $('.features-list li');

  var allGamesType = $('.game_categories div');
  var games = $('.game');
  var type;

  // var gamesCategories = document.querySelectorAll('.game_categories > div');

  var rightArrow = $('.arrow_black.right');
  var leftArrow = $('.arrow_black.left');

  var firstSlide = $('.game_categories > div:nth-of-type(-n+3)');
  var secondSlide = $('.game_categories > div:nth-of-type(n+4)');
  console.log(secondSlide);

  $(secondSlide).addClass('close');

  rightArrow.on('click', function(){

    $(secondSlide).toggleClass('show');
    $(firstSlide).toggleClass('close');
  });

  leftArrow.on('click', function(){
    $(secondSlide).toggleClass('show');
    $(firstSlide).toggleClass('close');
  })

  open.on('click', function(){
    menu.slideToggle('slow');

    burgerIcon.toggleClass('close');
    closeIcon.toggleClass('close');
  });

  featureLinks.on('click', function(){

    $(this).toggleClass('aquamarineColor');
    featureLinks.not($(this)).removeClass('aquamarineColor');
  });

  allGamesType.on('click', function(){
    $(this).toggleClass('aquamarineColor');
    allGamesType.not($(this)).removeClass('aquamarineColor');
    type = $(this).attr('id');

    games.each(function(){

      var this_type = $(this).data('type')

      if(type == this_type ) {
        $(this).css('display', 'block');
        games.not($(this)).css('display', 'none');
      }else if(type == 'all') {
        games.css('display', 'block');
      }
    })
  });
})