let time = document.getElementById('time').innerText;
let resetTime = time;
let count;

let startTimer = ()=>{
    count = setInterval(()=>{
        if(time == 0){
            clearInterval(count)
            return;
        }
        else{
            time--;
            document.getElementById('time').innerText = time > 9 ? time :` 0${time}`;
        }
    },1000)
}

let stopTimer = ()=>{
    clearInterval(count);
}

let resetTimer = ()=>{
    clearInterval(count);
    time = resetTime;
    document.getElementById('time').innerText = time;
}

