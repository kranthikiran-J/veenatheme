class CustomSlider extends HTMLElement {
    constructor() {
      super();
      console.log(this)
      this.element = this
      this.options = JSON.parse(this.element.dataset.options);
      this.mountSplider()

    }
  
    mountSplider() {
      new Splide(this.element,this.options).mount();
    }
  }
  
  customElements.define("splider-component", CustomSlider);