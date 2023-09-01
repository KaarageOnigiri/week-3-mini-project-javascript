const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDsisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

alert("I want to play a game.");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    var playTheGame = confirm("Do you want to play a game?");

    if (playTheGame) {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
    }
}))

function generateComputerChoice() {
    var randomNumber = Math.random() * possibleChoices.length; // or you can use possibleChoices.length
    randomNumber = Math.ceil(randomNumber);
    let computerChoice = "";

    
    if (randomNumber === 1) {
        computerChoice = 'rock';
        console.log("rock ran");
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
        console.log("scissors ran");
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
        console.log("paper ran");
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}


