const questions = [
    { question: "What is JavaScript primarily used for?", options: ["Styling web pages", "Server-side scripting", "Client-side scripting", "Database management"], answer: "Client-side scripting" },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["int", "var", "string", "declare"], answer: "var" },
    { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Manipulation", "Dynamic Output Method", "Document Oriented Mapping"], answer: "Document Object Model" }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft;
let timerInterval;

function startTimer() {
    timeLeft = 60;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    startTimer();
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    questionData.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${option}" ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''}> ${option}`;
        li.onclick = () => { 
            li.querySelector("input").checked = true;
            selectOption(option); 
        };
        optionsList.appendChild(li);
    });
    document.getElementById("prev").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    document.getElementById("next").style.display = currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submit").classList.toggle("hidden", currentQuestionIndex !== questions.length - 1);
    document.getElementById("next").disabled = !userAnswers[currentQuestionIndex];
}

function selectOption(option) {
    userAnswers[currentQuestionIndex] = option;
    document.getElementById("next").disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").innerHTML = `<h2>You scored ${score} out of ${questions.length}!</h2>`;
}

loadQuestion();