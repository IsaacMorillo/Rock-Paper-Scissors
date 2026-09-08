let humanScore = 0;
let computerScore = 0;
const humanOptions = document.querySelectorAll(".opcion-Container");
const body = document.querySelector("body");

humanOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const humanChoice = getHumanChoice(option);
    const cpuChoice = getComputerChoice();
    showChoices(humanChoice, cpuChoice);
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
  const winnerContainer = document.createElement("div");
  let winner = "";
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "PLAYER";
    ++humanScore;
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    winner = "CPU";
    ++computerScore;
  }
  showWinner(winner, winnerContainer);
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
  const choicesContainer = document.createElement("div");
  addChoiceContent("PLAYER", humanChoice, choicesContainer);
  const confrontatioSymbolContainer = document.createElement("p");
  confrontatioSymbolContainer.textContent = "VS";
  choicesContainer.appendChild(confrontatioSymbolContainer);
  addChoiceContent("CPU", cpuChoice, choicesContainer);
  choicesContainer;
  body.appendChild(choicesContainer);
}

function addChoiceContent(player, content, parentContainer) {
  const choicePlayer = document.createElement("p");
  choicePlayer.textContent = player;
  const choiceContainer = document.createElement("p");
  choiceContainer.textContent = content;
  parentContainer.append(choicePlayer, choiceContainer);
}

function showWinner(content, parentContainer) {
  const titleContainer = document.createElement("p");
  if (content !== "") {
    titleContainer.textContent = "WINNER!!";
    const winnerName = document.createElement("p");
    winnerName.textContent = content;
    parentContainer.append(titleContainer, winnerName);
  } else {
    titleContainer.textContent = "DRAW";
    parentContainer.appendChild(titleContainer);
  }
  body.appendChild(parentContainer);
}

//playGame();
