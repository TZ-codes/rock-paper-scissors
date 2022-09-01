//keeps track of player score vs. computer score
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const score = document.querySelector('.score');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');


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
        playAgain();
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.` 
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
        playAgain();
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.` 
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
        playAgain()
    } else {
        computerScore++;
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`
        score.textContent = `Player Score: ${playerScore}. Computer score: ${computerScore}.`
        winGame();
        winner.textContent = winGame();
        playAgain();
    }
}

//an event listener that chooses rock for the playerSelection when clicked
rock.addEventListener('click', () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

paper.addEventListener('click', () => {
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

scissors.addEventListener('click', () => {
    const playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

//displays the winner of the game
const winGame = () => {
    if (playerScore === 5) {
        return "Congratulations! You Win the Game!";
    } else if (computerScore === 5) {
        return "Sorry. You Lose.";
    }
}


let button = document.querySelector('.play-again');

const yes = document.createElement('button')
const no = document.createElement('button');

yes.textContent = 'Yes';
no.textContent = 'No';

const playAgain = () => {
    if (playerScore === 5 || computerScore === 5) {
        button.textContent = "Play Again?";    
        button.appendChild(yes);
        button.appendChild(no);
        document.body.appendChild(button);
    }
};

yes.addEventListener('click', () => {
    window.location.reload();
})

no.addEventListener('click', func = () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = "Thanks for playing!";
    document.body.appendChild(newDiv);
    no.removeEventListener('click', func);
})


