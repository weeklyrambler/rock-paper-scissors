
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
  let player = playerSelection.toLowerCase();  
  console.log(player); 
  computerSelection = getComputerChoice(); 
  console.log(computerSelection); 
  let outcome = null; 
  if (player == 'rock' && computerSelection == 'paper') {
   outcome = "Oh no! The computer chose paper, you lose!"; 
  } else if (player == 'rock' && computerSelection == 'scissors') {
   outcome = "Yes! rock beats scissors! You win!"; 
  } else if (player == 'rock' && computerSelection == 'rock') {
   outcome = "Yikes! It's a tie, you both chose rock! Try again."; 
  };

  if (player == 'paper' && computerSelection == 'scissors') {
    outcome = "Oh no! The computer chose scissors, you lose!"; 
  } else if (player == 'paper' && computerSelection == 'rock') {
    outcome = "Yes! paper beats rock! You win!";
  } else if (player == 'paper' && computerSelection == 'paper') {
    outcome = "Yikes! It's a tie, you both chose paper! Try again."; 
  };
   
  if (player == 'scissors' && computerSelection == 'rock') {
    outcome = "Oh no! The computer chose rock, you lose!"; 
  } else if (player == 'scissors' && computerSelection == 'paper') {
    outcome = "Yes! scissors beats paper! You win!"; 
  } else if (player == 'scissors' && computerSelection == 'scissors') {
    outcome = "Yikes! It's a tie, you both chose scissors! Try again."; 
  }; 
console.log(outcome); 
  return outcome; 

}

function game() {
    
}
