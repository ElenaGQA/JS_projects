let questionNum = document.querySelector("#questionNum");
let setUpDiv = document.querySelector("#setUp");
let questionText = document.querySelector(".question");
console.log(questionText.innerHTML);
let userInput = document.querySelector("#questionAnswer");
let scoreElement = document.querySelector("#scoreNum");
let wrongElement = document.querySelector("#wrongNum");
let messageElement = document.querySelector(".message");
let gameElements = document.querySelector(".gameContainer");
let timerElement = document.querySelector("#timer");
let backgroundMusic = document.querySelector("#backgroundMusic");
let gameOverDiv = document.querySelector("#gameOverDiv"); // added

let startBtn = document.querySelector("#startBtn")
let submitBtn = document.querySelector("#submitBtn")

let operators = ["*", "/", "+", "-"];
let num1;
let num2;
let operator;
let score = 0;
let wrongAnswers = 0;
let totalQuestions = 0;
let askedQuestions = 0;
let gameOn = false;

gameElements.style.display = "none";

startBtn.addEventListener('click', () => {
    totalQuestions = questionNum.value;
    if (totalQuestions < 1 || totalQuestions > 20) {
        alert("Put the namber between 1 and 20");
    }
    else {
        gameOn = true;
        gameElements.style.display = "block";
        setUpDiv.style.display = "none";
        backgroundMusic.play();
        generateQuestion();
    }
})

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateQuestion() {
    num1 = getNumber(0, 100);
    num2 = getNumber(0, 100);
    operator = operators[getNumber(0, 3)];
    questionText.innerHTML = `${num1} ${operator} ${num2} = `;
}

if (totalQuestions == askedQuestions || totalQuestions == wrongAnswers) {
    gameOn = false;
    gameOverDiv.style.display = "block";
    gameElements.style.display = "none";
    setUpDiv.style.display = "none";
}



