var scoreBoard = document.getElementById('display-scores');

addEventListener('load', function() {
// render high scores and initials to scores.html
        scoreBoard.textContent = `${JSON.parse(localStorage.getItem('Initials'))}`;
        scoreBoard.textContent =  `${JSON.parse(localStorage.getItem('Score'))}`
    });