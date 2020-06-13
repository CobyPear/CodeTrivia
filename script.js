/* code quiz
    1)when the user visits the site, the page will display the title and a description as well as a highscore link on the top
        as wel as a button to start the quiz
        need a link to high score page on the top left and a timer on the top right
    
    2) TODO: when the user pushes the button, the page will populate with a question and the timer will begin
        page has 4 answer buttons that appear to be ordered lists

    3)correct answer stores points, wrong answer subtracts time from clock

    4) when all questions are answered or timer == 0, game is over.

    5) user can enter initials and save score for later viewing */






// VARIABLES

// variable to populate h2
var headerEl = document.getElementById('header');
 
// variable to populate answers and text
var textEl = document.getElementById('text');

// variable for unhiding buttons
var hideEl = document.querySelector('.hide');

// start button
var startButtonEl = document.getElementById('start-button');

// variable for timer on page
var timerEl = document.querySelector('.timer');

// variable to store high scores

// variable to store user's name 

// variable to store number of correct answers

// variable to set initial timer
let secondsRemaning  = 75;

// questions
var questions = [
    {   
        question: 'What do you need to make a string?',
        answers: [
            {text: 'quesiton marks', correct: false},
            {text: 'quotation marks', correct: true},
            {text: 'parenthesses', correct: false},
            {text: 'script tag', correct: false}
        ]
    },
    {
        question: 'Question 2',
        answers: [
            {text: 'answer 1', correct: false},
            {text: 'answer 2', correct: false},
            {text: 'answer 3', correct: true},
            {text: 'answer 4', correct: false}
        ]
    },
    {
        question: 'Question 3',
        answers: [
            {text: 'answer 1', correct: false},
            {text: 'answer 2', correct: false},
            {text: 'answer 3', correct: false},
            {text: 'answer 4', correct: true}
        ]
    },
    {
        question: 'Question 4',
        answers: [
            {text: 'answer 1', correct: false},
            {text: 'answer 2', correct: true},
            {text: 'answer 3', correct: false},
            {text: 'answer 4', correct: false}
        ]
    },
    {
        question: 'Question 5',
        answers: [
            {text: 'answer 1', correct: true},
            {text: 'answer 2', correct: false},
            {text: 'answer 3', correct: false},
            {text: 'answer 4', correct: false}
        ]
    }
];
// current question array
var currentQuestions;



// FUNCTIONS

// timer
function timer() {
    var timerInterval = setInterval(function() {
        // decrement seconds left
        secondsRemaning--;
        // render seconds remaing to page
        timerEl.textContent = 'Timer: ' + secondsRemaning;
        console.log(secondsRemaning)
        console.log('WORKING')
        // if the user gets a question wrong, decrease the amount of seconds remaining by some amount
        // if (questions.answer == false) {
        //     // render 'Wrong' to the screen
        //     //decrease amount of seconds remaining

        //     //if secondsRemaining == 0, stop the game and clear the timer
        if (secondsRemaning ==  0) {
        //     clearInterval(timerInterval);
        clearInterval(timerInterval);
        headerEl.innerHTML = 'Time is up!'
        }
    }, 1000);
};

// question generator/ game start
function gamestart() {
    //start timer
    timer();

    // shuffle the question order
    questions.sort(() => Math.random() -0.5);
    console.log('QUESTIONS: ', questions)

    // ask a question
    // questionAsker(questions);

    // // generate a question
    // questionAsker = (questions) => {
    //     // for loop goes through question array
    //     for (let i = 0; i < questions.length; i++) {
    //         question
    //     }

    // }
};




//EVENT LISTENERS

// on page load, populate start button and quiz info
addEventListener('load', () => {
    // populate header
    headerEl.textContent = 'Welcome to the quiz'
    // populate the rules text
    textEl.textContent = 'You have 75 seconds for the quiz. Each wrong answer will decrease your time by X. Correct answers will increase your score. At the end of the quiz, you can input your initials to save your highscore. Good luck!'
    // show the start button
    hideEl.classList.remove('hide');
});

// on button click start quiz
startButtonEl.addEventListener('click', function() {
    gamestart();
});

// on button click store answer/score

// on cliick to show highscores

// on click to clear high scores

//on click to go back


// ON LOAD