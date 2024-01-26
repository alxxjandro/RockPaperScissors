
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
    let winner;

    console.log('user: ', userChoice)
    console.log('computer: ',computersChoice)

    //created an array so we can display what won to what
    //we use either the user o computer choice as the index position
    const choices =  ['Rock','Paper','Scissors'];
    switch(true){
        case userChoice === computersChoice:
            console.log(result = `It's a tie!`,'\n');
            //this calls the function once again if its a tie
            playRound(getUserChoice(),getComputerChoice());
            break;
        case userChoice === 1 && computersChoice === 0:
            console.log(result = 'You lose!');
            console.log(choices[userChoice], 'beats',choices[computersChoice]);
            break;
        case userChoice === 2 && computersChoice === 1:
            console.log(result = 'You lose!');
            console.log(choices[userChoice], 'beats',choices[computersChoice]);
            break;
        case userChoice === 0 && computersChoice === 2:
            console.log(result = 'You lose!');
            console.log(choices[userChoice], 'beats',choices[computersChoice]);
            break;
        default:
            console.log(result = 'You lose!');
            console.log(choices[computersChoice], 'beats', choices[userChoice]);
            winner = 'computer'
    }

    //detect whos the winner
    if (winner != 'computer'){
        winner = 'player'
    } 
    return winner
} 

function play(){
    //we do this re-declaration so that we can get the winner on this scope also

    for (let i = 0; i <= 4; i++){
        let winner = playRound(getUserChoice(),getComputerChoice());
        console.log('Round '+(i+1))
        console.log('')
    }
}

play();






