// Object for Quiz Question and answers. Correct answer a
const quizQuestion = [
    {
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

// variables for keeping score
var right = 0;
var wrong = 0;
var numQuestions = 2;
var score = right/numQuestions;

// document.getElementById(questionText).innerHTML = quizQuestion



// Clicking continue opens next question
// button.addEventListener("click", function () {
// window.location.div = quizQuestion[question];
//   });


 

  