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

// make the answer buttons
var answerButton1 = document.createElement('button');
var answerButton2 = document.createElement('button');
var answerButton3 = document.createElement('button');
var answerButton4 = document.createElement('button');

// area to print result
var result = document.getElementById('result')

// variable to store high scores

// variable to store user's name 
var hsInitial;

// variable to store number of correct answers aka user's score
var score = 0;

// variable to set initial timer
let secondsRemaning  = 75;

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
var currentQuestion = [];
var i = 0;



// FUNCTIONS

// timer
function timer() {
    var timerInterval = setInterval(function() {
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
        headerEl.innerHTML = 'Time is up!'
        textEl.innerHTML = score;
        console.log("Time's up")
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

    // ask a question
    questionAsker();
};

// populate the page with a question FIXME:
questionAsker = () => {
    if (questions[i] > questions.length) {
        console.log('GAME OVER: ');
        enterScore();
    }
    // debugging
    console.log('CURRENT Q: ', currentQuestion);
    console.log('value of i: ', i);

    // append the list to be populated to the textEl
    textEl.replaceWith(aList);

    // Had this block as a for loop but it wasn't working properly.

        // store current question
        currentQuestion = questions[i];
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
        //icrement questions index
        i++;
    

        // on button click store answer/score
        answerButton1.addEventListener('click', function() {
            // if this is the right answer,
            if (currentQuestion.correctAnswer == 'a') {
                // print correct to the page
                result.textContent = 'Correct!';
                // add 1 to the score
                score++;
                console.log('SCORE: ', score);
                // increment quesiton index
                // i++;
                // ask next question
                questionAsker();
                
                //else, print wrong to the page and decrease the time
            } else {
                // print 'Wrong!' to the page
                result.textContent = 'Wrong!';;
                // take 10 seconds off clock
                secondsRemaning -= 10;
                // increment question index
                // i++;
                // ask next quesiton
                questionAsker();
                
            }
        });
        answerButton2.addEventListener('click', function() {
            // if this is the right answer,
            if (currentQuestion.correctAnswer == 'b') {
                // print correct to the page
                result.textContent = 'Correct!';
                // add one to score
                score++;
                console.log('SCORE: ', score);
                // increment quesiton index
                // i++;
                // ask next quesiton
                questionAsker();
                //else, print wrong to the page and decrease the time
            } else {
                // print 'Wrong!' to the page
                result.textContent = 'Wrong!';
                // take 10 seconds off clock
                secondsRemaning -= 10;
                // increment quesiton index
                // i++;
                questionAsker();
            }
        });
        answerButton3.addEventListener('click', function() {
            // if this is the right answer,
            if (currentQuestion.correctAnswer == 'c') {
                // print correct to the page
                result.textContent = 'Correct!';
                // add one to score
                score++;
                console.log('SCORE: ', score);
                // increment quesiton index
                // i++;
                // ask next quesiton
                questionAsker();
                //else, print wrong to the page and decrease the time
            } else {
                // print 'Wrong!' to the page
                result.textContent = 'Wrong!';
                // take 10 seconds off clock
                secondsRemaning -= 10;
                // increment question index
                // i++;
                // ask next question
                questionAsker();
            }
        });
        answerButton4.addEventListener('click', function() {
            // if this is the right answer,
            if (currentQuestion.correctAnswer == 'd') {
                // print correct to the page
                result.textContent = 'Correct!'
                // add one to score
                score++;
                console.log('SCORE: ', score);
                //increment quesiton index
                // i++;
                // ask next quesiton
                questionAsker();
                //else, print wrong to the page and decrease the time
            } else {
                // print 'Wrong!' to the page
                result.textContent = 'Wrong!'
                // take 10 seconds off clock
                secondsRemaning -= 10;
                // increment question index
                // i++;
                questionAsker();
            }
        });
};

// game over, enter initials to store high score TODO:
enterScore => {
    console.log('GAME OVER')
}


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

// on button click start quiz
startButtonEl.addEventListener('click', gamestart);

// on cliick to show highscores

// on click to clear high scores

//on click to go back


// ON LOAD