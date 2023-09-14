//Global variables to track game scores. 
let playerScore = 0;
let computerScore = 0; 

/*Function returns a random number betwenn 0 and 2 and uses conditional block to determine if the computer chooses rock, paper or scissors. Choice of the computer is saved to the item variable and returned*/
function getComputerChoice() {
  let num =  Math.floor(Math.random() * 3); 
  let item = null; 
  if (num == 0) {
    item = 'rock'; 
  } else if (num == 1) {
      item = 'paper'; 
  } else {
    item = 'scissors'; 
  }
 return item; 
}

/*Gets the player inputted choice and calls getComputerChoice to get computer's choice. Conditional blocks used to determine the outcome and tally a point for either the computer or player.*/ 
function playRound(playerSelection, computerSelection) {
  let player = playerSelection; 
  console.log(player); 
  computerSelection = getComputerChoice(); 
  console.log(computerSelection);  
  let outcome = ' '; 
  if (player == 'rock' && computerSelection == 'paper') {
   outcome = "Oh no! The computer chose paper, you lose!"; 
   computerScore += 1; 
  } else if (player == 'rock' && computerSelection == 'scissors') {
   outcome = "Yes! rock beats scissors! You win!";  
   playerScore += 1; 
  } else if (player == 'rock' && computerSelection == 'rock') {
   outcome = "Yikes! It's a tie, you both chose rock! Try again."; 
  };

  if (player == 'paper' && computerSelection == 'scissors') {
    outcome = "Oh no! The computer chose scissors, you lose!";
    computerScore += 1; 
  } else if (player == 'paper' && computerSelection == 'rock') {
    outcome = "Yes! paper beats rock! You win!";
    playerScore += 1; 
  } else if (player == 'paper' && computerSelection == 'paper') {
    outcome = "Yikes! It's a tie, you both chose paper! Try again."; 
  };
   
  if (player == 'scissors' && computerSelection == 'rock') {
    outcome = "Oh no! The computer chose rock, you lose!"; 
    computerScore += 1; 
  } else if (player == 'scissors' && computerSelection == 'paper') {
    outcome = "Yes! scissors beats paper! You win!";  
    playerScore += 1; 
  } else if (player == 'scissors' && computerSelection == 'scissors') {
    outcome = "Yikes! It's a tie, you both chose scissors! Try again."; 
  }; 

  console.log(outcome);  

}

/*Function prompts user for their choice and then calls and feeds user's choice to playRound to start the game. Scores for both computer and user are outputted each time. Conditional block determines ultimate winner after all rounds played. */

document.getElementById("rock").addEventListener("click", rock);

function rock() { 
  let answer = ''; 
  console.log(answer = 'rock'); 
  playRound(answer.toLowerCase()); 
  console.log("Your score is: " + playerScore);
  console.log("The computer's score is: " + computerScore);
  game(); 
}

document.getElementById("paper").addEventListener("click", paper); 

function paper() {
  let answer = ''; 
  console.log(answer = 'paper'); 
  playRound(answer.toLowerCase()); 
  console.log("Your score is: " + playerScore);
  console.log("The computer's score is: " + computerScore);
  game(); 
}

document.getElementById("scissors").addEventListener("click", scissors); 

function scissors() {
  let answer = ''; 
  console.log(answer = 'scissors'); 
  playRound(answer.toLowerCase()); 
  console.log("Your score is: " + playerScore);
  console.log("The computer's score is: " + computerScore);
  game(); 
}

function game() {
 
 if (playerScore == 5 || computerScore == 5) { 

 if (playerScore > computerScore) {
  console.log("Congratulations! You have won the most games.")
 } else if (computerScore > playerScore) {
  console.log("Oh no! The computer has won the most games! Better luck next time.")
 } else {
  console.log("It's a tie! Try again.") 
 }
} 


}

//game(); 

//Function checks to see if either score equals 5 to determine ultimate winner, then resets scores. 
/*function endGame() {
    if (computerScore == 5) {
        console.log("Uh oh! The computer has reached 5 points and won the game. Better luck next time.")
        computerScore = 0; 
        playerScore = 0; 
     } else if (playerScore == 5) {
        console.log("Yes! You have reached 5 points and have won the game! Congratulations!")
        computerScore = 0; 
        playerScore = 0; 
     }
}*/ 