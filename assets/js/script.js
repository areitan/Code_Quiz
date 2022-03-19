// Set JS selectors
var scoreEl = document.querySelector("#score-text");
var timeEl = document.querySelector("#time-text");
var startButton = document.querySelector(".start-button");
var aButton = document.querySelector(".a-button");
var bButton = document.querySelector(".b-button");
var cButton = document.querySelector(".c-button");
var a2Button = document.querySelector(".a2-button");
var b2Button = document.querySelector(".b2-button");
var c2Button = document.querySelector(".c2-button");
var submitButton = document.querySelector(".submit-button");
var questionText = document.querySelector(".questionText");
var startText = document.querySelector(".startText");
var startList = document.querySelector(".startList");
var choiceText = document.querySelector(".choiceText");
var initialsContainer = document.querySelector(".initialsContainer");
var questionContainer = document.querySelector(".questionContainer");
var questionContainer2 = document.querySelector(".questionContainer2");


// variables for timer
var time;
var timeRemaining;

// variables for keeping score
var rightAnswer = 0;
var numQuestions = 2;
var score = (rightAnswer / numQuestions) * 100;

// question counter variable
// create render function
// render function target question text and buttons. create variables for buttons inside the function

// page load events

function init() {
    questionContainer.classList.add("hidden");
    questionContainer2.classList.add("hidden");
    initialsContainer.classList.add("hidden");
}

// Quiz start 
function startQuiz() {
    startTimer()
    timeRemaining = 10;
    startList.classList.add("hidden");
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
}

// Quiz start 
function quesstion2() {
    questionContainer.classList.add("hidden");
    questionContainer2.classList.remove("hidden");
   }


// timer function
function startTimer() {
    time = setInterval(function () {
        timeRemaining--;
        timeEl.textContent = timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(time);
            timeout();
        }
    }, 1000);
}

//   subtract 5s from clock for wrong answers


// End quiz 
function endQuiz() {
    startText.textContent = "That's all there is to it.";
    startList.classList.add("hidden");
    startButton.classList.remove("hidden");
    questionContainer2.classList.add("hidden");
    initialsContainer.classList.remove("hidden");
}

// Timeout 
function timeout() {
    startText.textContent = "Time's Up!";
    startList.classList.add("hidden");
    startButton.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    questionContainer2.classList.add("hidden");
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

// add 1 to score


// Apend initials to screen


//  Calls init function
init();

// Event lister button click to start button
startButton.addEventListener("click", startQuiz);

// Event lister button click to question 1 answer buttons
aButton.addEventListener("click", quesstion2);
bButton.addEventListener("click", quesstion2);
cButton.addEventListener("click", quesstion2);

// Event lister button click to question 2 answer buttons
a2Button.addEventListener("click", endQuiz);
b2Button.addEventListener("click", endQuiz);
c2Button.addEventListener("click", endQuiz);

// Event lister button click to submit button

