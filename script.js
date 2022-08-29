//keeps track of player score vs. computer score
let playerScore = 0;
let computerScore = 0;

//gave each button a class and saved it to a variable
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//Selects computer's choice for game of rock, paper, scissors
const getComputerChoice = () => {
    let result = Math.floor(Math.random() * 3 );
    if(result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else if (result === 2) {
        return "scissors";
    }
};

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

//an event listener that chooses rock for the playerSelection when 
rock.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(winGame());
})

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(winGame());
})

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(winGame());
})

// for loop that plays 5 rounds of rock, paper, scissors
// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = window.prompt("Choose your weapon!").toLowerCase();
//         const computerSelection = getComputerChoice().toLowerCase();
//         console.log(playRound(playerSelection, computerSelection));
//     }  
// }

// game();

//determines the winner of the rock, paper, scissors game
const winGame = () => {
    if (playerScore === 5) {
        return "Congratulations! You Win the Game!";
    } else if (computerScore === 5) {
        return "Sorry. You Lose.";
    }
}




//when the person clicks on the rock button, it should choose the option rock. Need an event listener that does a 'click' event 