let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const numRan = Math.ceil(Math.random() * 3);
  switch (numRan) {
    case 1:
      return "paper";
      break;
    case 2:
      return "rock";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  return prompt("Select between Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(`Your choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  if (humanChoice === "paper") {
    switch (computerChoice) {
      case "paper":
        console.log("You tied! You got the same thing as the computer");
        break;
      case "scissors":
        console.log("You lose! Scissors beat Paper");
        ++computerScore;
        break;
      case "rock":
        console.log("You win! Paper beats Rock");
        ++humanScore;
        break;
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "scissors":
        console.log("You tied! You got the same thing as the computer");
        break;
      case "rock":
        console.log("You lose! Rock beats Scissors");
        ++computerScore;
        break;
      case "paper":
        console.log("You win! Scissors beat Paper");
        ++humanScore;
        break;
    }
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        console.log("You tied! You got the same thing as the computer");
        break;
      case "paper":
        console.log("You lose! Paper beat Rock");
        ++computerScore;
        break;
      case "scissors":
        console.log("You win! Rock beats Scissors");
        ++humanScore;
        break;
    }
  }
  console.log(`Your puntuation: ${humanScore}`);
  console.log(`Computer puntuation: ${computerScore}`);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const player = getHumanChoice();
    const cpu = getComputerChoice();
    playRound(player, cpu);
  }
  console.log(`Your final puntuation: ${humanScore}`);
  console.log(`Computer final puntuation: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log(`Congrats!! You win!!`);
  } else if (humanScore < computerScore) {
    console.log(`Sorry, you lose`);
  } else {
    console.log(`This is a tie!!`);
  }
}

playGame();
