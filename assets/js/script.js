// Set JS selectors
var scoreEl = document.querySelector("#score-text");
var timeEl = document.querySelector("#time-text");
var startButton = document.querySelector(".start-button");
// var continueButton = document.querySelector(".continue-button");
var submitButton = document.querySelector(".submit-button");
var questionText = document.querySelector(".questionText");
var choiceText = document.querySelector(".choiceText");
var initials = document.querySelector("#initials");

// Set variables
// variables for timer
var time;
var timeRemaining;

// variables for keeping score
var rightAnswer = 0;
var numQuestions = 2;
var score = (rightAnswer / numQuestions) * 100;

// create counter variable

// create render function


// in render function target question text and buttons. create variables for buttons inside the function


// use question array and counter variable to get current question object and update variables (targets from render fx)


// Object for Quiz Question and answers. Correct answer a
const quizQuestion = [
    {
        // Correct answer a
        question: "What are the JavaScript data types?",
        answerChoices: {
            a: "Number, String, Boolean, Object, and Undefined",
            b: "Helvetica, Cambria, and Times New Roman",
            c: "Tall, Dark, and Handsome"
        },
        correct: "a"
    },
    {
        // Correct answer c
        question: "What does DOM stand for?",
        answerChoices: {
            a: "Defined Object Method",
            b: "Definately Over My head",
            c: "Document Object Model"
        },
        correct: "c"
    }
];

// page load events







// Quiz start 
function startQuiz() {
    timeRemaining = 10;
    questionText.textContent = "";
    startButton.disabled = true;
    startTimer()
}


// timer function
function startTimer() {
    time = setInterval(function () {
        timeRemaining--;
        timeEl.textContent = timeRemaining;
        //  need to add if questions answered with time remaining
        if (timeRemaining === 0) {
            clearInterval(time);
            timeout();
        }
    }, 1000);
}

//   subtract 5s from clock for wrong answers


// End quiz 
function endQuiz() {
    questionText.textContent = "That's all there is to it.";
    choiceText.textContent = "";
    startButton.disabled = false;
}

// Timeout 
function timeout() {
    questionText.textContent = "Time's Up!";
    choiceText.textContent = "";
    startButton.disabled = false;
}

// Update score (% keep in localStorage)
function setScore() {
    scoreEl.textContent = score;
    localStorage.setItem("userScore", score);
}

// Update initials (Initials to localStorage)
function setInitials() {
    initials.textContent = score;
    localStorage.setItem("initials", initials);
}

// Apend initials to screen







// Event lister button click to start button
startButton.addEventListener("click", startQuiz);

// Event lister button click to answer button





// Event lister button click to submit button
submitButton.addEventListener("click", endQuiz);
