  
const scoreValue = document.getElementById('value');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissor');
let rock = document.getElementById('rock');

const resultContainer = document.querySelector('.result-container');
const resetBtn = document.getElementById('playAgain');
//const userImg = document.getElementById('user');
//const compImg = document.getElementById('machine');
const buttons = document.querySelectorAll('.btn');
const player = document.getElementById('you');
//const computer = document.getElementById('computer');
const resultBox = document.querySelector('.result-title');
//const hideComputerChoice = document.querySelector('.invisible');
let gameResult = document.getElementById('status');
let userChoice, computerChoice; 

let score = 0;
let winner;
const pointMap = new Map();
pointMap.set('paper', 0);
pointMap.set('scissors', 1);
pointMap.set('rock', 2);



function init() {
    let choices = ['paper', 'scissor', 'rock'];
    userChoice = undefined;
    computerChoice = undefined;
     
    buttons.forEach((curr) => {
        curr.addEventListener('click', () => {
    userChoice = curr.id;
    choices.splice(choices.indexOf(userChoice), 1);
    computerChoice = choices[choiceGen()];
    console.log(userChoice);
    console.log(computerChoice);
    console.log(choices)
    choices = ['paper', 'scissors', 'rock'];
    checkWinner();
    result(userChoice, computerChoice);
})

})
}


/* Generate computer choices*/


function choiceGen() {
    return Math.floor((Math.random()) * 2);
}

/* score update*/

function updateScore(value) {
    score += value;
    scoreValue.innerHTML = score;
}


/* compare */ 

function checkWinner() {
    if (userChoice === 'paper' && computerChoice === 'rock' ) {
       // gameResult.innerText = "you win";
        winner = userChoice;
       gameResult.innerHTML="You Win";
       
        setTimeout(() => {
            updateScore(1);
        }, 3450)

        
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      //  gameResult.innerText = "you lose";
        winner = computerChoice;
        gameResult.innerHTML="Computer Win";
        
        setTimeout(() => {
            updateScore(0);
        }, 3450)

    } else if (pointMap.get(userChoice) > pointMap.get(computerChoice)) {
       // gameResult.innerText = "you win";
        winner = userChoice;
        gameResult.innerHTML="You Win";
        
        setTimeout(() => {
            updateScore(1);
        }, 3450)

    } else {
       // gameResult.innerText = "you lose";
        winner = computerChoice;
        gameResult.innerHTML="Computer Win";
        setTimeout(() => {
            updateScore(0);
        }, 3450)

    }
    console.log(score)
}



init();