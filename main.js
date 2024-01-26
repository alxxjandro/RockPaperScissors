
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
        alert('Invalid input, try again!');
        userChoice = getUserChoice();
    }

    return userChoice;
}

//this funcion receives both the users and the computers choice
function playRound(userChoice,computersChoice){
    let result;
    let winner = null;

    //de-buging purposes 
    //console.log('user: ', userChoice)
    //console.log('computer: ',computersChoice)

    //created an array so we can display what won to what
    //we use either the user o computer choice as the index position
    const choices =  ['Rock','Paper','Scissors'];
    switch(true){
        case userChoice === computersChoice:
            console.log(result = `It's a tie!`,'\n');
            //this calls the function once again if its a tie
            winner = playRound(getUserChoice(),getComputerChoice());
            break;
        case userChoice === 1 && computersChoice === 0:
            console.log(result = 'You win!');
            console.log(choices[userChoice], 'beats',choices[computersChoice]);
            break;
        case userChoice === 2 && computersChoice === 1:
            console.log(result = 'You win!!');
            console.log(choices[userChoice], 'beats',choices[computersChoice]);
            break;
        case userChoice === 0 && computersChoice === 2:
            console.log(result = 'You win!!!');
            console.log(choices[userChoice], 'beats',choices[computersChoice]);
            break;
        default:
            console.log(result = 'You lose!');
            winner = 'computer'
            console.log(choices[userChoice], 'loses to',choices[computersChoice]);
    }

    //console.log(winner) this is just to de-bug
    return winner
} 

function play(){
    //define the variables to store both computer and players points
    let playerPoints = 0,
    computerPoints = 0;
    
    for (let i = 0; i <= 4; i++){
        //display the round
        console.log('Round '+(i+1))
        console.log('')

        //we do this re-declaration so that we can get the winner on this scope also
        let winner = playRound(getUserChoice(),getComputerChoice());
        //console.log(winner); this is just to de-bug (make sure it arrived as it should)

        //add the points to the respective winner
        if (winner === 'computer'){
            computerPoints++;
            console.log('Computer points ', computerPoints);
            console.log(''); 
            if (computerPoints === 3){
                console.log('You lose to the computer!')
                break;
            }
        } else if (winner !== 'computer'){
            playerPoints++;
            console.log('Player points ', playerPoints);
            console.log('')
            //break the game if the player wins
            if (playerPoints === 3){
                console.log('You win to the computer!!!')
                break;
            }
        }



    }
}

play();






