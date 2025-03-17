let btn = document.querySelectorAll("button")
let display = document.getElementById("display")
let arr = ['+','-','*','/']

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let value = e.target.innerHTML
        let last = display.value.slice(-1)
        let removeLast = display.value.slice(0,-1)
        if(value === "="){
            if(arr.includes(last)){
                display.value = removeLast
                display.value = eval(display.value) 
            }
            else{
                display.value = eval(display.value)
            }
        }
        else if(value === "C"){
            display.value = "";
        }
        else if(arr.includes(value)){
            if(last == value){
                display.value = display.value;
            }
            else{
                if(arr.includes(last)){
                    display.value = removeLast + value;
                }
                else{
                    display.value += value;
                }
            }
        }
        else{
            display.value += value;
        }
    })
})