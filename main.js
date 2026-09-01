function getComputerChoice() {
  const numRan = Math.ceil(Math.random() * 3);
  switch (numRan) {
    case 1:
      return "Paper";
      break;
    case 2:
      return "Rock";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function getHumanChoice(){
    return prompt("Select between Rock, Paper or Scissors");
}

getHumanChoice();