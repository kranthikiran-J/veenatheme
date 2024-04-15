
const radio = document.querySelectorAll('.radio')
const firstImage = document.querySelectorAll('.get-img')
console.log(radio)

radio.forEach((eachradio)=>{
    eachradio.addEventListener("mouseenter",function(){
        let imageLink = eachradio.getAttribute("data-images");
        let imageElIndex = eachradio.getAttribute("data-imageindex") - 1;
        firstImage[imageElIndex].setAttribute("src",imageLink);
        console.log(eachradio);
    })
})