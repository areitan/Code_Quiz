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
var initialsInput = document.querySelector("#initials");
var savedUser = document.querySelector("#savedUser");


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
}

// Quiz start and Q1
function startQuiz() {
    startTimer()
    timeRemaining = 5;
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
            timeout();
        }
    }, 1000);
}

// Timeout 
function timeout() {
    startText.textContent = "";
    startList.classList.add("hidden");
    startButton.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    questionContainer2.classList.add("hidden");
}

// End quiz 
function endQuiz() {
    startText.textContent = "";
    startList.classList.add("hidden");
    startButton.classList.remove("hidden");
    questionContainer2.classList.add("hidden");
    initialsContainer.classList.remove("hidden");
}

// Update score (keep in localStorage)
function setScore() {
    scoreEl.textContent = score;
    localStorage.setItem("userScore", score);
}

// get value from first correct answer button
// add 1 to score
function setScoreText() {
    scoreText.textContent = score;
}
// Attach event listener to 1st correct answer button 
q1correctButton.addEventListener("click", function() {
  score++;
  setScoreText();
});

// // Attach event listener to 2nd correct answr button 
q2correctButton.addEventListener("click", function() {
    score++;
    setScoreText();
  });

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

// Reduce time for incorret answers

// Update initials (Initials to localStorage) 
// function saveUserInfo() {
//        // User Info
//      var userInfo = {
//       userInitials: initialsInput.value.trim(),
//       userScore: score.value,
//     };
  
    // local storage 
//     localStorage.setItem("userInfo", JSON.stringify(userInfo));
//   }

// Add  Initials and Score to Initials
// function renderUserInfo() {
//     var userDisplay = JSON.parse(localStorage.getItem("userInfo"));
//     if (userDisplay !== null) {
//     document.getElementById("savedUser").textContent = userInfo.userInitials;
//     document.getElementById("savedScore").textContent = userInfo.userScore;
//        } else {
//       return;
//     }
//   }
  
  // Event listener button click to submit button
//   submitButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   saveUserInfo();
//   renderUserInfo();
//   });



