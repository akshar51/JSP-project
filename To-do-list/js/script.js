let inputbox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

let addTask = ()=> {
    if(inputbox.value === ""){
        alert("Write something in input field !!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    // listContainer.innerHTML = localStorage.getItem("data");
    let tasks = listContainer.getElementsByTagName("li");
    for(let e of tasks){
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        e.appendChild(span)
    }
}
showTask();