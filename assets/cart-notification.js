class CartNotification extends HTMLElement {
    constructor() {
        super();

        this.form = this.querySelector('form');
        
    }

  
}

customElements.define("cart-notification", AddToCartButton);
