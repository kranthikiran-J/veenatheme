class VeenaProductCard extends HTMLelements {
  constructor() {
    super();

    console.log("Product card",this);
  }
}
customElements.define("veena-product-card", VeenaProductCard);
