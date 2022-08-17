//create a function called getComputerChoice.
//This function should randomly return the strings "Rock", "Paper", or "Scissors"
//Set a variable (i.e. result) equal to Math.floor(Math.random() * 3). This should produce either 0, 1, or 2.
// Next use an if/else statement if result === 0, return "Rock", etc.

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
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tie!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors."
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock."
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper."
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock."
    }  else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper."
    }  else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors."
    } else {
        return "Error! Please try again."
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


