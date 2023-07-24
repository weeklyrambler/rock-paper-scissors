
function getComputerChoice() {
  let num =  Math.floor(Math.random() * 3); 
  console.log(num); 
  let item = null; 
  if (num == 0) {
       item = 'rock'; 
  } else if (num == 1) {
       item = 'paper'; 
  } else {
      item = 'scissors'; 
  }
 return console.log(item); 
}

getComputerChoice(); 