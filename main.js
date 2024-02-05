
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

let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;
function playRound(userChoice,computersChoice){
    let result;
    let winner = null;

    const choices =  ['Rock','Paper','Scissors'];
    switch(true){
        case userChoice === computersChoice:
            resultText.innerText = `It's a tie! `;
            break;
        case userChoice === 1 && computersChoice === 0:
            resultText.innerText = `You win! ` + choices[userChoice] + ' beats ' + choices[computersChoice]
            playerPoints += 1;
            rounds +=1
            break;
        case userChoice === 2 && computersChoice === 1:
            resultText.innerText = `You win! ` + choices[userChoice] + ' beats ' + choices[computersChoice]
            playerPoints += 1;
            rounds +=1
            break;
        case userChoice === 0 && computersChoice === 2:
            resultText.innerText = `You win! ` + choices[userChoice] + ' beats ' + choices[computersChoice]
            playerPoints += 1;
            rounds +=1
            break;
        default:
            resultText.innerText = 'You lose! ' + choices[userChoice] + ' loses to '+ choices[computersChoice]
            computerPoints +=1;
            rounds +=1
    }

    score.innerText = 'Player points: ' + playerPoints + '  |   Computer Points: ' + computerPoints;
    round.innerText = 'Round: ' + rounds;

    if (rounds <= 5 && playerPoints === 3 ){
        resultText.innerText = 'You Win!!!'
        score.innerText = 'Click a button to play again'
        round.innerText = ''

        computerPoints = 0;
        playerPoints = 0;
        rounds = 0;
    } else if (rounds <= 5 && computerPoints === 3 ){
        resultText.innerText = 'You Lose!!!'
        score.innerText = 'Click a button to play again'
        round.innerText = ''

        computerPoints = 0;
        playerPoints = 0;
        rounds = 0;
    }
} 


//this part will handle the GUI of the game
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

const buttons = document.querySelectorAll('button');

const resultContainer = document.querySelector('#result')
const resultText = document.createElement('p');
const score = document.createElement('p');
const round = document.createElement('p');

resultContainer.append(resultText,score,round);


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    switch(true){
        case button.id === 'rockBtn':
            playRound(0,getComputerChoice());
            break;
        case button.id === 'paperBtn':
            playRound(1,getComputerChoice());
            break;
        case button.id === 'scissorsBtn':
            playRound(2,getComputerChoice());
            break;
        default:
            break;
    }

  });
});
