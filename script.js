"use strict";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");
resultsDiv.style.whiteSpace = "pre";

const gameBtn = document.createElement("button");
gameBtn.id = "reset";
gameBtn.textContent = "reset";

let humanScore = 0;
let computerScore = 0;

document.body.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.textContent = "";
  } else {
    playRound(e.target.id, getComputerChoice);
  }
});

//playGame();

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt('Type "rock", "paper" or "scissors"');
  return choice;
}

function playGame() {
  if (humanScore > computerScore) {
    console.log("You've won!");
    console.log("Your score:" + humanScore);
    console.log("Score of the Computer:" + computerScore);
  } else if (computerScore > humanScore) {
    console.log("You've lost!");
    console.log("Your score:" + humanScore);
    console.log("Score of the Computer:" + computerScore);
  } else {
    console.log("It's a tie!");
    console.log("Your score:" + humanScore);
    console.log("Score of the Computer:" + computerScore);
  }
}

function playRound(humanChoice, computerChoiceCallback) {
  let computerChoice = computerChoiceCallback();
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    resultsDiv.textContent = `You win! "${humanChoice}" beats "${computerChoice}"\nScore: ${humanScore}\nComputerscore: ${computerScore}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore += 1;
    resultsDiv.textContent = `You loose! "${humanChoice}" looses to "${computerChoice}"\nScore: ${humanScore}\nComputerscore: ${computerScore}`;
  } else {
    resultsDiv.textContent = `It's a tie! You have both chosen "${humanChoice}"\nScore: ${humanScore}\nComputerscore: ${computerScore}`;
  }
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      resultsDiv.textContent += `\n\nYou've won!\nYour score: ${humanScore}\nScore of the Computer: ${computerScore}\n`;
      resultsDiv.appendChild(gameBtn);
    } else {
      resultsDiv.textContent += `\n\nYou've lost!\nYour score: ${humanScore}\nScore of the Computer: ${computerScore}\n`;
      resultsDiv.appendChild(gameBtn);
    }
  }
}
