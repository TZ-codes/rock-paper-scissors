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



