const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const result = document.getElementById('result');
const tiedMatches = document.getElementById('tied-score');
var generate = document.getElementById('generate');


alert("Let's play a game.");
alert("R = Rock, P = Paper, S = Scissors");

let userChoice;
let computerChoice = "";

var wins = 0;
var losses = 0;
var ties = 0;
var winner = '';

function generateResult() {
    console.log("function generateResult");
    if (computerChoice === userChoice) {
        ties++;
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". It's a tie.")
    }
    else if(computerChoice === 'R' && userChoice === 'S') {
        losses++;
        winner = "Computer";
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". " + winner + " wins.")
    }
    else if(computerChoice === 'S' && userChoice === 'P') {
        losses++;
        winner = "Computer";
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". " + winner + " wins.")
    }
    else if(computerChoice === 'P' && userChoice === 'R') {
        losses++;
        winner = "Computer";
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". " + winner + " wins.")
    }
    else if(userChoice === 'R' && computerChoice === 'S') {
        wins++;
        winner = "User";
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". " + winner + " wins.")
    }
    else if(userChoice === 'S' && computerChoice === 'P') {
        wins++;
        winner = "User";
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". " + winner + " wins.")
    }
    else if(userChoice === 'P' && computerChoice === 'R') {
        wins++;
        winner = "User";
        alert("Computer chose " + computerChoice + ", You chose " + userChoice + ". " + winner + " wins.")
    }
    else {
        alert("bye");
        return;
    }
   
    var playAgain = confirm("Play again?")

    if(playAgain) {
        playAGame();
    }
    else {
    var realWinner
    if(wins > losses) {
        realWinner = "User";
    }
    else if (wins < losses) {
        realWinner = "Computer";
    }
    else if (wins === losses) {
        realWinner = "Tied";
    }
    console.log(losses, wins, ties, realWinner);
    computerScore.innerHTML = losses;
    userScore.innerHTML = wins;
    result.innerHTML = realWinner;
    tiedMatches.innerHTML = ties;
    }
    return;
}

function generateComputerChoice() {
    let randomNumber = Math.random() * 3; 
    randomNumber = Math.ceil(randomNumber);
    
    
    if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
        if (randomNumber === 1) {
            computerChoice = 'R';
            console.log("rock ran");
        }
        else if (randomNumber === 2) {
            computerChoice = 'S';
            console.log("scissors ran");
        }
        else if (randomNumber === 3) {
            computerChoice = 'P';
            console.log("paper ran");
        }
        else {
            alert("bye");
            return;
        }
       
        generateResult();
    }
    
    
}
    
function playAGame() {
    userChoice = prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toUpperCase();

    console.log(userChoice);


    generateComputerChoice();
}

playAGame();
// generate.addEventListener("click", playAGame);

