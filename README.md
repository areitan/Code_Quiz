# Code_Quiz


## Description

Given only an example of a code quiz and desired functionality, the goal was to produce a style.css, index.html, and script.js file that work together to produce the desired quiz.

NOTE: Due to time constraints, I was not able to finish all of the coding for this project. It is a work in progress. It needs more styling added as well as some functionality.

- [Git Hub Repository](https://github.com/areitan/Code_Quiz)
- [Code Quiz Deployed Application](https://areitan.github.io/Code_Quiz/)


Example

![Code Quiz Example](/assets/images/04-web-apis-homework-demo.gif)

Code Quiz

![Code Quiz Screenshot](/assets/images/code_quiz_screenshot.png)


## Process

### Thinking Through The Problem

1. The first step I took was to start pseudo-coding. I wanted to get my thought process down on paper and then attempt to write the code from there.
2. I used paper and pencil to draw out a flow chart showing my desired screens and the events I thought I needed to handle on and/or between them.


### index.html

1. Since the HTML file is the framework for the application, I thought it was logical to start there.
2. I played around with several different layouts to map out the pieces I thought I would need.
3. Ultimately, I decided to add sections for each "screen" I wanted to show.
4. I added id's and event listeners to allow me to access the correct answer buttons in order to use them for scoring.


### style.css

1. I decided to wait to do much styling until the end, so at the beginning I only added very basic styling to the CSS file. Then for readability, I added more css as I went.
2. I added a class called ```.hidden``` with  ```display: none``` to work together with the javescript and hide items when I didn't want them displayed.
3. Unortunately, I ran out of time to finish the styling.


### script.js

1. I made an outline of comments to help guide my process in creating the javaScript I needed.
2. I added a class ```.hidden``` and added it or removed it for elements to control when they would display or they would be hidden.
3. I used event listeners and functions to keep score and control the flow of questions.
4. This document is incomplete. I ran out of time and was unable to finish all of the functionality.
5. I added an event listener and functions to allow the user to submit their initials and score and have it saves at the bottom of the page.
6. I added a function to reduce the time interval for incorrect answers.


## How To Contribute

There are certainly more elegant ways to write this code, and input is welcome.


## Credits

- [Guru99: Top 100 JavaScript Interview Questions and Answers for 2022](https://www.guru99.com/javascript-interview-questions-answers.html)
- [W3 Schools: HTML ```<input>``` type Attribute](https://www.w3schools.com/tags/att_input_type.asp)
- Trilogy Education Services, LLC for the example gif and sample code throughout the week 4 activities.





