class VeenaProductCard extends HTMLElement {
  constructor() {
    super();

    console.log("Product card",this);

    this.addEventListener('change', event => {
      if(event.target.name == "id") this.variantChange();
    })

    
    
    
  }
}
customElements.define("veena-product-card", VeenaProductCard);
