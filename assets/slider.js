class SliderProductImages extends HTMLElement {
  constructor() {
    const config = {
      slidesPerView: 3,
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
    };
    super(config);
  }
}

customElements.define("slider-product-images", SliderProductImages);
