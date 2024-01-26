
//this function chooses either rock, paper or scissors
function getComputerChoice(){
    let computersChoice = Math.floor(Math.random() * 3);
    return computersChoice;
}

//this functions handles the user input
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

//this funcion receives both the users and the computers choice
function playRound(userChoice,computersChoice){
    let result;

    console.log('user: ', userChoice)
    console.log('computer: ',computersChoice)

    switch(true){
        case userChoice === computersChoice:
            result = `It's a tie!`
            break
        case userChoice === 1 && computersChoice === 0:
            result = 'You win!'
            break
        case userChoice === 2 && computersChoice === 1:
            result = 'You win!!'
            break
        case userChoice === 0 && computersChoice === 2:
            result = 'You win!!!'
            break
        default:
            result = 'You lose!'
    }


    console.log(result)
}

playRound(getUserChoice(),getComputerChoice());


