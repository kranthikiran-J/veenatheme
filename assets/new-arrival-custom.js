
const radioEl = document.querySelectorAll('.radio-1')
const firstImageEl = document.querySelectorAll('.fetch-img')
console.log(firstImageEl)
console.log(radioEl)

radioEl.forEach((eachradio)=>{
    eachradio.addEventListener("mouseenter",function(){
        let imageLinkEl = eachradio.getAttribute("data-images");
        console.log(imageLinkEl)
        let imageElIndex = eachradio.getAttribute("data-imageindex") - 1;
        console.log(imageElIndex)
        console.log(firstImageEl[imageElIndex])
        firstImageEl[imageElIndex].setAttribute("src",imageLinkEl);
        console.log(eachradio);
    })
})



