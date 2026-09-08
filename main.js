let humanScore = 0;
let computerScore = 0;
const humanOptions = document.querySelectorAll(".opcion-Container");
const body = document.querySelector("body");

humanOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const humanChoice = getHumanChoice(option);
    const cpuChoice = getComputerChoice();
    showChoices(cpuChoice);
    playRound(humanChoice, cpuChoice);
  });
});

function getComputerChoice() {
  const numRan = Math.ceil(Math.random() * 3);
  switch (numRan) {
    case 1:
      return "paper";
    case 2:
      return "rock";
    case 3:
      return "scissors";
  }
}

function getHumanChoice(opcion) {
  const humanChoiceContainer = opcion.querySelector("button");
  return humanChoiceContainer.textContent;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(`Your choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win!! ${humanChoice} beats ${computerChoice}`);
    ++humanScore;
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    console.log(`You lose. ${computerChoice} beat ${humanChoice}`);
    ++computerScore;
  } else if (humanChoice === computerChoice) {
    console.log("You tied! You got the same thing as the computer");
  }
  console.log(`Your puntuation: ${humanScore}`);
  console.log(`Computer puntuation: ${computerScore}`);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log("ROUND " + i + " !!");
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

function showChoices(humanChoice, cpuChoice) {
  
}

function addChoiceContent(content, parentContainer) {
  const choiceContainer = document.createElement("p");
  choiceContainer.textContent = content;
  parentContainer.appendChild(choiceContainer);
}

//playGame();
