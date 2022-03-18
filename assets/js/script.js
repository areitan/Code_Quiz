// Set JS selectors
var scoreEl = document.querySelector("#score-text");
var timeEl = document.querySelector("#time-text");
var startButton = document.querySelector(".start-button");
var continueButton = document.querySelector(".continue-button");
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
var score = (rightAnswer/numQuestions)*100;

// ? var correctAnswers = ["a","c"]
// ? var userAnswers = []



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
    startButton.disabled = true;
    startTimer()
  }


// loop through quiz questions look for selected answer. push user choice to array?

// Quiz complete--when both questions are answered



// timer function
function startTimer() {
    time = setInterval(function() {
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


  // Timeout 

function timeout() {
    questionText.textContent = "Time's Up!";
    choiceText.textContent = "";
    startButton.disabled = false;
  }

// Update score (add correct answers and keep in localStorage)


// Update initials (Initials to localStorage)


// Event lister button click to start quiz
startButton.addEventListener("click", startQuiz);
 

  