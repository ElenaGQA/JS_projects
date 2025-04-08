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
let finalScore = document.querySelector('#finalScore');
let backgroundMusic = document.querySelector("#backgroundMusic");

let startBtn = document.querySelector("#startBtn")
let submitBtn = document.querySelector("#submitBtn")

let operators = ["*", "/", "+", "-"];
let num1;
let num2;
let operator;
let score = 0;
let correctAnswer = 0;
let wrongAnswers = 0;
let totalQuestions = 0;
let askedQuestions = 0;
let timeLeft = 0;
let countdown = 0;
let gameOn = false;

gameElements.style.display = "none";
questionNum.focus();
startBtn.addEventListener('click', () => {
    totalQuestions = questionNum.value;
    if (totalQuestions < 1 || totalQuestions > 20) {
        alert("Put the namber between 1 and 20");
    }
    else {
        gameOn = true;
        gameElements.style.display = "block";
        setUpDiv.style.display = "none";
        userInput.focus();
        backgroundMusic.play();
        generateQuestion();
    }
})

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateQuestion() {
    if (totalQuestions == askedQuestions) {
        gameOn = false;
        gameOverDiv.style.display = "block";
        gameElements.style.display = "none";
        setUpDiv.style.display = "none";
        if (score > wrongAnswers) {
            finalScore.innerHTML = `You won! Score is ${score}/${wrongAnswers}`
        }
        else if (score < wrongAnswers) {
            finalScore.innerHTML = `You lost! Score is ${score}/${wrongAnswers}`
        }
        else {
            finalScore.innerHTML = `It's a draw! Score is ${score}/${wrongAnswers}`
        }

    }
    num1 = getNumber(0, 10);
    num2 = getNumber(0, 10);
    operator = operators[getNumber(0, 3)];
    if (operator === "/") {
        num2 = getNumber(0, 10);
        num1 = num2 * getNumber(0, 10);
    }
    else if (operator === "-") {
        num2 = getNumber(0, 10)
        num1 = num2 + getNumber(0, 10)
    }
    questionText.innerHTML = `${num1} ${operator} ${num2} = `;
    if (operator === "+") {
        correctAnswer = num1 + num2;
    }
    else if (operator === "-") {
        correctAnswer = num1 - num2;
    }
    else if (operator === "/") {
        correctAnswer = num1 / num2;
    }
    else {
        correctAnswer = num1 * num2;
    }
    askedQuestions++;
    startTimer();
    console.log(wrongAnswers);
    console.log(score)

}

function startTimer() {
    clearInterval(countdown);
    timeLeft = 10;
    timerElement.innerHTML = `${timeLeft} s`;
    countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `${timeLeft} s`;
        if (timeLeft == 0) {
            clearInterval(countdown);
            messageElement.innerHTML = "Time is up";
            wrongAnswers++;
            wrongElement.innerHTML = wrongAnswers;
            generateQuestion();
        }
    }, 1000)
}

submitBtn.addEventListener('click', () => {
    let answer = +userInput.value;
    if (answer == "") {
        alert("Answer the question");
    }
    else if (answer === correctAnswer) {
        score++;
        scoreElement.innerHTML = score;
        messageElement.innerHTML = "Correct";
        userInput.value = "";
        generateQuestion();
    }
    else if (answer !== correctAnswer) {
        wrongAnswers++
        wrongElement.innerHTML = wrongAnswers;
        messageElement.innerHTML = "Wrong";
        userInput.value = "";
        generateQuestion();
    }
})









