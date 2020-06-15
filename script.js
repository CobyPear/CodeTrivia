/* code quiz
    1)when the user visits the site, the page will display the title and a description as well as a highscore link on the top
        as wel as a button to start the quiz
        need a link to high score page on the top left and a timer on the top right
    
    2) when the user pushes the button, the page will populate with a question and the timer will begin
        page has 4 answer buttons that appear to be ordered lists

    3) correct answer stores points, wrong answer subtracts time from clock
        TODO: FIXME: fix for loop (right now the loop goes to the last question in the questions array instead of the first)


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

// make an ordered list for questions to populate
var aList = document.createElement('ol');

// area to print result
var result = document.getElementById('result')

// make the answer buttons
var answerButton1 = document.createElement('button');
var answerButton2 = document.createElement('button');
var answerButton3 = document.createElement('button');
var answerButton4 = document.createElement('button');
answerButton1.classList.add('answer-button', 'a');
answerButton2.classList.add('answer-button', 'b');
answerButton3.classList.add('answer-button', 'c');
answerButton4.classList.add('answer-button', 'd');
answerButtons = document.getElementsByClassName('answer-button');


// variable to store number of correct answers aka user's score
var score = 0;

// variable to set initial timer
let secondsRemaning  = 75;
// timer variable
var timerInterval;

// questions
var questions = [
    {   
        question: 'What do you need to make a string?',
        answers: {
            a: 'a: question marks',
            b: 'b: quotation marks',
            c: 'c: parenthesses',
            d: 'd: script tag'
        },
        correctAnswer: 'b'
    },
    {   
        question: 'Placeholder Question 2',
        answers: {
            a: 'a: Placeholder A 1',
            b: 'b: Placeholder A 2',
            c: 'c: Placeholder A 3',
            d: 'd: Placeholder A 4'
        },
        correctAnswer: 'a'
    },
    {   
        question: 'Placeholder Question 3',
        answers: {
            a: 'a: Placeholder A 1',
            b: 'b: Placeholder A 2',
            c: 'c: Placeholder A 3',
            d: 'd: Placeholder A 4'
        },
        correctAnswer: 'a'
    },
    {   
        question: 'Placeholder Question 4',
        answers: {
            a: 'a: Placeholder A 1',
            b: 'b: Placeholder A 2',
            c: 'c: Placeholder A 3',
            d: 'd: Placeholder A 4'
        },
        correctAnswer: 'c'
    },
    {   
        question: 'Placeholder Question 5',
        answers: {
            a: 'a: Placeholder A 1',
            b: 'b: Placeholder A 2',
            c: 'c: Placeholder A 3',
            d: 'd: Placeholder A 4'
        },
        correctAnswer: 'd'
    },
];
// current question array
var currentQuestion;
var questionArray = [];
var i = 0;

// FUNCTIONS

// game over, enter initials to store high score TODO:
function enterScore() {
    clearInterval(timerInterval);
    timerEl.textContent = '';
    console.log('GAME OVER');
    // print 'Game Over!'
    headerEl.textContent = 'Game Over!';
    // print the score to the page
    divEl = document.createElement('div');
    scoreEl = document.createElement('score');
    scoreEl.style.color = 'blueviolet';
    scoreEl.textContent = `Final Score: ${score}`;
    headerEl.appendChild(divEl);
    divEl.appendChild(scoreEl);
    // create input box
    var form = document.createElement('form');
    var inputBox = document.createElement('input');
    // input box attributes
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('placeholder', 'Enter Initials');
    // render input box to screen
    aList.replaceWith(form);
    form.appendChild(inputBox);
    
    // store the initials and go to high scores page
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // variable to store typed in intials
        var initials = inputBox.value;
        // stored initials
        storedInitials = localStorage.setItem('Initials', initials );
        // check value of initials
        console.log('INPUT BOX VALUE: ', initials);
        // open the scores.html page if initials are not blank
        if (initials != '') {
            window.open('scores.html', '_self');
        };
    });
};

// timer
function timer() {
    timerInterval = setInterval(function() {
        // decrement seconds left
        secondsRemaning--;
        // render seconds remaing to page
        timerEl.textContent = 'Timer: ' + secondsRemaning;
        // console.log(secondsRemaning)
        // console.log('WORKING')
        // if the user gets a question wrong, decrease the amount of seconds remaining by some amount
        // if (questions.answer == false) {
        //     // render 'Wrong' to the page
        //     //decrease amount of seconds remaining

        //     //if secondsRemaining == 0, stop the game and clear the timer
        if (secondsRemaning == 0) {
        //     clearInterval(timerInterval);
        clearInterval(timerInterval);
        timerEl.textContent = 'Timer: ' + secondsRemaning;
        enterScore();
        }
    }, 1000);
};

// question generator/ game start
function gamestart() {
    // hide start button
    startButtonEl.classList.add('hide');
    //start timer
    timer();

    // shuffle the question order
    questions.sort(() => Math.random() -0.5);
    console.log('QUESTIONS: ', questions)
    // store the current question
    currentQuestion = questions[i];

    // ask a question
    questionAsker();
};

// populate the page with a question
questionAsker = () => {
    if (questionArray.length >= questions.length || secondsRemaning == 0) {
        enterScore();
    } else {
    // append the list to be populated to the textEl
    textEl.replaceWith(aList);

    // store current question
    currentQuestion = questions[i];
    // store questions into an array to check when there are no more questions to ask
    questionArray.push(questions[i]);
    // render the question to the page
    headerEl.innerHTML = questions[i].question;
    // set each list item texto to the answer's text
    answerButton1.innerHTML = questions[i].answers.a;
    answerButton2.innerHTML = questions[i].answers.b;
    answerButton3.innerHTML = questions[i].answers.c;
    answerButton4.innerHTML = questions[i].answers.d;
    //render each answer to the list
    aList.appendChild(answerButton1);
    aList.appendChild(answerButton2);
    aList.appendChild(answerButton3);
    aList.appendChild(answerButton4);
    console.log('value of i: ', i);
    console.log('CURRENT Q: ', currentQuestion);
    };
};


//EVENT LISTENERS

// on page load, populate start button and quiz info
addEventListener('load', () => {
    // populate header
    headerEl.textContent = 'Welcome to the quiz'
    // populate the rules text
    textEl.innerHTML = 'You have 75 seconds for the quiz. Each wrong answer will decrease your time by X. Correct answers will increase your score. At the end of the quiz, you can input your initials to save your highscore. Good luck!'
    // show the start button
    hideEl.classList.remove('hide');
});

// bind listener to class name for button nested in body
    // listen for click in body on class name
    document.addEventListener('click', function(e) {
    // working?
    // console.log('WORKING LISTENER: ')
    // if the button clicked is an answer button,
    if (e.target.classList.contains('answer-button')) {
        console.log('answer buttons work');
        if (e.target.classList.contains(currentQuestion.correctAnswer)) {
            console.log('CORRECT ANSWER WORKING')
            // add one to score
            score ++;
            // render 'correct!' to screen
            result.textContent = 'Correct!'
            // erase message after 1.5 seconds
            setTimeout(function() {
                result.textContent = '' 
            }, 1000);
            // increment question index
            i++;
            // ask next quesiton
            questionAsker();
        } else {
            console.log('WRONG ANSWER WORKING')
            // for a wrong answer, take 10 seconds off the clock
            secondsRemaning -= 10;
            // render 'Wrong!' to the page
            result.textContent = 'Wrong!'
            // erase message after 1.5 seconds
            setTimeout(function() {
                result.textContent = '' 
            }, 1000);
            //icrement question index
            i++;
            //ask next question
            questionAsker();
        };
    }
});

// on button click start quiz
startButtonEl.addEventListener('click', gamestart);