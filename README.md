# Code_Quiz


## Description
---

Given only an example of a code quiz and desired functionality, the goal was to produce a style.css, index.html, and script.js file that work together to produce the desired quiz. When the page loads you are presented with the rules of the quiz along with a button to that starts the timer and displayes the first question. Once the first question is answered correctly, question 2 displays as long as there is still time left on the timer. The time remaining is reduced by 2 seconds every time a questions is answered incorrectly until time is up. When time is up or both questions are answered correctly, the user is prompted to enter their initials to store and display their initials and score.


- [Git Hub Repository](https://github.com/areitan/Code_Quiz)
- [Code Quiz Deployed Application](https://areitan.github.io/Code_Quiz/)


# Example
---

![Code Quiz Example](/assets/images/04-web-apis-homework-demo.gif)

# Code Quiz
---

## Starting the Quiz
![Code Starting the Quiz Screenshot](/assets/images/code_quiz_screenshot.png)

## Quiz question 1
![Code Quiz question 1 Screenshot](/assets/images/code_quiz_screenshot2.png)

## Finishing the Quiz
![Code Quiz Finishing the Quiz Screenshot](/assets/images/code_quiz_screenshot3.png)

## Finishing the Quiz Local Storage
![Code Local Storage Screenshot](/assets/images/code_quiz_screenshot4.png)


## Process And Technology Used
---

### Thinking Through The Problem

1. The first step I took was to start pseudo-coding. I wanted to get my thought process down on paper and then attempt to write the code from there.
2. I used paper and pencil to draw out a flow chart showing my desired screens and the events I thought I needed to handle on and/or between them.


### index.html

1. Since the HTML file is the framework for the application, I thought it was logical to start there.
2. I played around with several different layouts to map out the pieces I thought I would need.
3. Ultimately, I decided to include all of the elements (except local storage elements since those are based on user input) in the ```HTML``` document.
4. I added classes to control hiding or showing sections at a given time in the quiz.
5. Specifically, I added classes to the ```HTML``` containers for the sections to control when they would be displayed.
6. I added id's in order to traverse the DOM and interact with elements in the ```HTML```.


### style.css

1. I decided to wait to do much styling until the end, so at the beginning, I only added very basic styling to the CSS file. Then for readability, I added more css as I went.
2. I added a class called ```.hidden``` with  ```display: none``` to work together with the javescript and hide items when I didn't want them displayed.
3. Added hover effect to all buttons for a cool effect.
4. I styles the buttons and initials input with a border radius.


### script.js

1. I made an outline of comments to help guide my process in creating the javaScript I needed.
2. I added a class ```.hidden``` and added it or removed it for elements to control when they would be displayed or hidden.
3. I used event listeners and functions to keep score and control the flow of questions.
4. This document is incomplete. I ran out of time and was unable to finish all of the functionality.
5. I added an event listener and functions to allow the user to submit their initials and score and have it saves at the bottom of the page.
6. I added id's and event listeners to allow me to access the correct answer buttons in order to use them for scoring and subtracting time.
7. I added a function to reduce the time interval for incorrect answers.
8. I used local storage and a function to create a list of saved users and their scores on the last screen of the quiz.


## How To Contribute
---

There are certainly more elegant ways to write this code, and input is welcome.


## License
---

Copyright (c) ```<2022> <copyright April Reitan>```

MIT License:
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credits
---

- [Guru99: Top 100 JavaScript Interview Questions and Answers for 2022](https://www.guru99.com/javascript-interview-questions-answers.html)
- [W3 Schools: HTML ```<input>``` type Attribute](https://www.w3schools.com/tags/att_input_type.asp)
- [MDN Web Docs: border-radius](https://www.w3schools.com/tags/att_input_type.asp)
- Trilogy Education Services, LLC for the example gif and sample code throughout the week 4 activities.





