// Set JS selectors
var scoreEl = document.querySelector("#scoreText");
var timeEl = document.querySelector("#time-text");
var startButton = document.querySelector(".start-button");
var aButton = document.querySelector(".a-button");
var q1correctButton = document.querySelector("#q1correct");
var q2correctButton = document.querySelector("#q2correct");
var bButton = document.querySelector(".b-button");
var cButton = document.querySelector(".c-button");
var a2Button = document.querySelector(".a2-button");
var b2Button = document.querySelector(".b2-button");
var c2Button = document.querySelector(".c2-button");
var submitButton = document.querySelector("#submitButton");
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
var score = 0;

// page load events
function init() {
    questionContainer.classList.add("hidden");
    questionContainer2.classList.add("hidden");
    initialsContainer.classList.add("hidden");
    document.getElementById("initials").textContent = "";
    renderLastUser();
}

// Quiz start and Q1
function startQuiz() {
    startTimer()
    timeRemaining = 10;
    startList.classList.add("hidden");
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
}

// Display Q2 
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
            endQuiz();
        }
    }, 1000);
}

// End quiz 
function endQuiz() {
    startText.textContent = "";
    startList.classList.add("hidden");
    startButton.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    questionContainer2.classList.add("hidden");
    initialsContainer.classList.remove("hidden");
    if (timeRemaining >= 0) {
        clearInterval(time);
        timeEl.textContent = "0";
    }
}

// Update score
function setScore() {
    scoreEl.textContent = score;
}

// get value from first correct answer button
// add 1 to score
function setScoreText() {
    scoreText.textContent = score;
}

// Reduce time for incorret answers
function subtractTime() {
    timeRemaining = timeRemaining - 2;
    if (timeRemaining <= 2) {
        clearInterval(time);
        timeEl.textContent = "0";
        endQuiz();
    }
}

// Attach event listener to 1st correct answer button 
q1correctButton.addEventListener("click", function () {
    score++;
    setScoreText();
});

// // Attach event listener to 2nd correct answr button 
q2correctButton.addEventListener("click", function () {
    score++;
    setScoreText();
});

// Event lister button click to start button
startButton.addEventListener("click", startQuiz);

// Event lister button click to question 1 answer buttons
aButton.addEventListener("click", quesstion2);
bButton.addEventListener("click", subtractTime);
cButton.addEventListener("click", subtractTime);

// Event lister button click to question 2 answer buttons
a2Button.addEventListener("click", subtractTime);
b2Button.addEventListener("click", subtractTime);
c2Button.addEventListener("click", endQuiz);

var lastUser = JSON.parse(localStorage.getItem("user")) || [];

// local storage variables
var initialsInput = document.querySelector("#initials");
var savedUser = document.querySelector("#savedUser");
var scoreList = document.querySelector("#scoreList");

// save user info
function saveUser() {
    // Save user data as an object
    var user = {
        userInitials: initials.value.trim(),
        userScore: score,
    };

    lastUser.push(user)
    // Store user object in local storage and convert to string
    localStorage.setItem("user", JSON.stringify(lastUser));
}

function renderLastUser() {
    // Use JSON.parse() to create object
    if (initialsInput !== null) {
        scoreList.innerHTML = ""
        for (var i = 0; i < lastUser.length; i++) {
            var scoreEl = document.createElement("li")
            scoreEl.textContent = lastUser[i].userInitials + " scored " + lastUser[i].userScore + " of 2 correct!"
            scoreList.appendChild(scoreEl)
        }
    } else {
        return;
    }
}

// event listener on submit button
submitButton.addEventListener("click", function (event) {
    saveUser();
    renderLastUser();
});

//  Calls init function
init();
