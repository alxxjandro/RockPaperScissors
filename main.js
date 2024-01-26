
//this function chooses either rock, paper or scissors
function getComputerChoice(){
    let computersChoice = Math.floor(Math.random() * 3);
    return computersChoice;
}

function getUserChoice(){
    //get the user input
    let userChoice = prompt('Choose either Rock, Paper or Scissors').toLowerCase();

    //make the user input into a number
    if (userChoice === 'rock'){
        userChoice = 0;
    } else if (userChoice === 'paper') {
        userChoice = 1;
    } else if (userChoice === 'scissors') {
        userChoice = 2;
    } else{
        userChoice = null;
    }

    return userChoice;
}

function playRound(computersChoice,userChoice){
    console.log(userChoice)
    console.log(computersChoice)
}

playRound(getComputerChoice(),getUserChoice());


