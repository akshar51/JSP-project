const questions = [
    { question: "What is JavaScript primarily used for?", options: ["Styling web pages", "Server-side scripting", "Client-side scripting", "Database management"], answer: "Client-side scripting" },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["int", "var", "string", "declare"], answer: "var" },
    { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Manipulation", "Dynamic Output Method", "Document Oriented Mapping"], answer: "Document Object Model" }
];

let currentQueIdx = 0;
let userAns = [];
let timeLeft;
let timerInterval

function startTimer(){
    timeLeft = 60;
    clearInterval(timerInterval)
    timerInterval = setInterval(()=>{
        if(timeLeft > 0){
            timeLeft--;
            document.getElementById("timer").innerHTML = `Time left : ${timeLeft}s`
        }
        else{
            clearInterval(timerInterval)
            nextQuestion();
        }
    },1000)
}

function loadQuestion(){
    startTimer();
    const questionData = questions[currentQueIdx]
    document.getElementById("question").innerHTML = questionData.question
    
    const optionList = document.getElementById("options")
    optionList.innerHTML = "";

    questionData.options.forEach((opt)=>{
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${opt}" ${userAns[currentQueIdx]=== opt?'checked':''}>${opt}`;
        li.onclick=()=>{
            li.querySelector("input").checked = true;
            selectOption(opt)
        }
        optionList.appendChild(li);
    })
    document.getElementById("prev").style.display = currentQueIdx === 0 ? "none":"inline-block";
    document.getElementById("next").style.display = currentQueIdx === questions.length-1 ? "none":"inline-block";
    document.getElementById("submit").classList.toggle("hidden",currentQueIdx === questions.length - 1)
    document.getElementById("next").disabled = !userAns[currentQueIdx];
}


function nextQuestion(){
    if(currentQueIdx < questions.length - 1){
        currentQueIdx++;
        loadQuestion();
    }
    else{
        submitQuiz();
    }
}

function selectOption(opt){
    userAns[currentQueIdx]=opt;
    document.getElementById("next").disabled = false;
}
loadQuestion()