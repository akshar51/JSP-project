let sliderItem = document.querySelectorAll(".slider-item")
let sliderIdx = 0;

let currSlide = (n)=>{
    sliderIdx += n;
    displaySlide(sliderIdx);
    slides(sliderIdx)
}

let displaySlide = (e)=>{
    if(e >= sliderItem.length){
        sliderIdx = 0
    }
    if(e<0){
        sliderIdx = sliderItem.length - 1
    }
    for(i=0;i<sliderItem.length;i++){
        sliderItem[i].classList.remove("active");
    }
    sliderItem[sliderIdx].classList.add("active")
    
}
displaySlide(sliderIdx)

//-------------- DOT-BUTTON -----------------------//
let btn = document.querySelectorAll(".dot")

let slides = (s)=>{
   
    sliderItem.forEach((val)=>{
        val.classList.remove("active")
    })
    sliderItem[s].classList.add("active");

    btn.forEach((button)=>{
        button.classList.remove("red")
    })
    btn[s].classList.add("red")
    
}