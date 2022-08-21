//create a function called getComputerChoice.
//This function should randomly return the strings "Rock", "Paper", or "Scissors"
//Set a variable (i.e. result) equal to Math.floor(Math.random() * 3). This should produce either 0, 1, or 2.
// Next use an if/else statement if result === 0, return "Rock", etc.


//Selects computer's choice for game of rock, paper, scissors
const getComputerChoice = () => {
    let result = Math.floor(Math.random() * 3 );
    if(result === 0) {
        return "Rock";
    } else if (result === 1) {
        return "Paper";
    } else if (result === 2) {
        return "Scissors";
    }
};

//create a function, playRound, that takes the parameters playerSelection and computerSelection
//Function needs to return a string that declares the winner of a round (i.e. "You Lose! Paper beats Rock")
//For the playerSelection parameter, you need it to be case-insensitive (i.e. rock, Rock, RocK)
//Should consider all possible outcomes like a tie, playerSelection is Rock, Paper, or Scissors

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

//keeps track of player score vs. computer score
let playerScore = 0;
let computerScore = 0;

//plays one round of rock, paper, scissors and determines the winner of the round
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `It's a Tie! Player score: ${playerScore}. Computer score: ${computerScore}.`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}. Player Score: ${playerScore}. Computer score: ${computerScore}.`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}. Player Score: ${playerScore}. Computer score: ${computerScore}.`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}. Player Score: ${playerScore}. Computer score: ${computerScore}.`
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}. Player Score: ${playerScore}. Computer score: ${computerScore}.`
    }
}

//Create a function called game()
//Inside the game() function call the playRound function that will play a 5 round game and keeps score. It will report the winner and loser at the end.

//use a for loop for the 5 round game. If the computer wins increment their score +1. If the player wins increment their score +1

// Use prompt() to get user input


//for loop that plays 5 rounds of rock, paper, scissors
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Choose your weapon!").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

//determines the winner of the rock, paper, scissors game
const winGame = () => {
    if (playerScore > computerScore) {
        return "Congratulations! You Win the Game!";
    } else if (playerScore < computerScore) {
        return "Sorry. You Lose. Try again. :(";
    }
}

console.log(winGame());
