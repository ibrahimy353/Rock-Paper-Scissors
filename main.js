let userScore = 0;  

let compScore = 0;  

let winMsg = "You Won!";  
let loseMsg = "You lost to Computer!";  
let drawMsg = "It's a draw!";

prompt("Rock or Paper or Scissor?","");

function computerPlay() {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
      case 0:
          return "rock";
          break;
      case 1:
          return "paper";
          break;
      case 2:
          return "scissor";
          break;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
      let computerSelection = computerPlay();
      let playerSelection = prompt("Rock or Paper or Scissor?", "");
      console.log(`Your Selection: ${playerSelection.toUpperCase()} Computer Selection: ${computerSelection.toUpperCase()}
  ${result(playerSelection.toLowerCase(),computerSelection)}`);
  }
  if (userScore > compScore) {
      return winMsg;
  } else if (userScore < compScore) {
      return loseMsg;
  } else {
      return drawMsg;
  }
}

