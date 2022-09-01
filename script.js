//keeps track of player score vs. computer score
let playerScore = 0;
let computerScore = 0;

//gave each button a class and saved it to a variable
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const score = document.querySelector('.score');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');


//Add a div for displaying results and change all of your console.logs into DOM methods.

// Display the running score, and announce a winner of the game once one player reaches 5 points.
//what needs to happen:
    //after every round played I need the score div to update the playerScore or ComputerScore by incrementing it unless it is a tie
    //when a score of 5 is reached for either the computer or player I needs to announce the winner

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

//plays one round of rock, paper, scissors and determines the winner of the round
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        results.textContent = `It's a Tie!`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.` 
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.` 
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.` 
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
    } else {
        computerScore++;
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
    }
}

//an event listener that chooses rock for the playerSelection when 
rock.addEventListener('click', () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    winGame();
})

paper.addEventListener('click', () => {
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    winGame();
})

scissors.addEventListener('click', () => {
    const playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
    
})

//determines the winner of the rock, paper, scissors game
const winGame = () => {
    if (playerScore === 5) {
        return "Congratulations! You Win the Game!";
    } else if (computerScore === 5) {
        return "Sorry. You Lose.";
    }
}
