class CartNotification extends HTMLElement {
    constructor() {
        super();
        this.modalAddToCart = document.querySelector('#addToCartModal');
        this.productImage = document.querySelector('#modal-product-image');
        this.productTitle = document.querySelector('#modal-product-title');
        this.variantTitle = document.querySelector('#modal-variant-title');
        this.productQuantity = document.querySelector('#modal-product-quantity');
        this.productPrice = document.querySelector('#modal-product-price');
        this.addEventListener("click", this.addToCart.bind(this));
    }

    async addToCart(e){
        e.preventDefault();
        console.log('test');
        let addToCartForm = document.querySelector("#product-form");
        let formData = new FormData(addToCartForm);

        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            body: formData
          })
          .then((response) => response.text())
          .then((responseData) => {
            // console.log(JSON.parse(data));
            const data = JSON.parse(responseData);
            console.log(data);
            this.renderProductInfo(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    renderProductInfo(data){
        this.productImage.src = data.featured_image.url;
        this.productTitle.innerHTML = data.product_title;
        this.variantTitle.innerHTML = data.variant_title ?? '';
        this.productQuantity.innerHTML = data.quantity;
        this.productPrice.innerHTML = this.formatPrice(data.price);
    }

    formatPrice(price){
        let priceString = price.toString();
        let parsePrice = (parseInt(priceString) / 100);
        return Number(parsePrice).toLocaleString('en');
    }
}

customElements.define("add-to-cart-notification", CartNotification);
