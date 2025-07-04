"use strict";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const computerSelection = getComputerChoice;

playGame();

let getHumanChoice = document.addEventListener("click", (event) => {
  let target = event.target;
  playRound(target.id, computerSelection());
});

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

//function getHumanChoice() {}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! "${humanChoice}" beats "${computerChoice}"`);
    humanScore += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You loose! "${humanChoice}" looses to "${computerChoice}"`);
    computerScore += 1;
  } else {
    console.log(`It's a tie! You have both chosen "${humanChoice}"`);
    humanScore += 0.5;
    computerScore += 0.5;
  }
}
