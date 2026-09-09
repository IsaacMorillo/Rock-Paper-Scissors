let humanScore = Number(document.querySelector("#playerScore").textContent);
let computerScore = Number(document.querySelector("#cpuScore").textContent);
const humanOptions = document.querySelectorAll(".opcion-Container");
const body = document.querySelector("body");
const numberRoundContainer = document.querySelector("#number-round");
let numberRound = Number(numberRoundContainer.textContent);
const infoGameContainer = document.querySelector(".info-game");

const infoWinnerRound = document.createElement('div');

humanOptions.forEach((option) => {
  option.addEventListener("click", () => {
    infoGameContainer.innerHTML = "";
    infoWinnerRound.innerHTML ="";
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
  const humanChoiceContainer = opcion.querySelector(".playerChoice");
  return humanChoiceContainer.textContent;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let winner = "";
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "PLAYER";
    document.querySelector("#playerScore").textContent = ++humanScore;
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    winner = "CPU";
    document.querySelector("#cpuScore").textContent = ++computerScore;
  }
  showWinner(winner, infoWinnerRound);
  numberRoundContainer.textContent = ++numberRound;
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
  addChoiceContent("PLAYER", humanChoice, infoGameContainer);
  const confrontatioSymbolContainer = document.createElement("p");
  confrontatioSymbolContainer.textContent = "VS";
  infoGameContainer.appendChild(confrontatioSymbolContainer);
  addChoiceContent("CPU", cpuChoice, infoGameContainer);
  body.appendChild(infoGameContainer);
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
    titleContainer.textContent = "ROUND WINNER";
    const winnerName = document.createElement("p");
    winnerName.textContent = content;
    parentContainer.append(titleContainer, winnerName);
  } else {
    titleContainer.textContent = "DRAW";
    parentContainer.appendChild(titleContainer);
  }
  body.appendChild(parentContainer);
}
