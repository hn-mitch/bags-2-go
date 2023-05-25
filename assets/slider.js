window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        click: function(e) {
          console.log(e.clickedIndex);
          const imgIndex = e.clickedIndex;
          const imgSrc = document.querySelector('.media-' + imgIndex + ' > img').getAttribute('src');
          document.querySelector('.featured-image').src = imgSrc;
        }
      }
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760
        ? 'vertical'
        : 'horizontal';

      return direction;
    }
  });