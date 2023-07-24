
let playerScore = 0;
let computerScore = 0; 

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


function game(answer) {
 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);  
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();
 
 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();

 answer = prompt("Please enter rock, paper, or scissors:",)
 playRound(answer.toLowerCase()); 
 console.log("Your score is: " + playerScore);
 console.log("The computer's score is: " + computerScore);
 endGame();
}

game(); 

function endGame() {
    if (computerScore == 5) {
        console.log("Uh oh! The computer has reached 5 points and won the game. Better luck next time.")
        computerScore = 0; 
        playerScore = 0; 
     } else if (playerScore == 5) {
        console.log("Yes! You have reached 5 points and have won the game! Congratulations!")
        computerScore = 0; 
        playerScore = 0; 
     }
}