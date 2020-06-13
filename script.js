/* code quiz
    1) TODO: when the user visits the site, the page will display the title and a description as well as a highscore link on the top
        as wel as a button to start the quiz
        need a link to high score page on the top left and a timer on the top right
    
    2) when the user pushes the button, the page will populate with a question and the timer will begin
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
console.log(hideEl);

// variable for timer on page
var timerEl = document.getElementsByClassName('timer')

// variable to store high scores

// variable to store user's name 

// variable to store number of correct answers

// variable to set initial timer
var timer  = 75;

// questions
var questions [
    {}
]



// FUNCTIONS

// question generator/ game start
gamestart = () => {
// timer
    setInterval(() => {

        
    }, 1000 * timer);
}

// generate a question







//EVENT LISTENERS

// on page load, populate start button and quiz info
window.addEventListener('load', () => {
    // populate header
    headerEl.textContent = 'Welcome to the quiz'
    // populate the rules text
    textEl.textContent = 'You have 75 seconds for the quiz. Each wrong answer will decrease your time by X. Correct answers will increase your score. At the end of the quiz, you can input your initials to save your highscore. Good luck!'
    // show the start button
    hideEl.classList.remove('hide');
})

// on button click start quiz

// on button click store answer/score

// on cliick to show highscores

// on click to clear high scores

//on click to go back









// ON LOAD

