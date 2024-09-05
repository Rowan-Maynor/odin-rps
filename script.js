let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 100 );
    if (rand <= 33) {
        return "ROCK";
    } else if (rand <= 66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice () {
    let answer = prompt("Please choose Rock, Paper, or Scissors!");
    return answer;
}

function playRound(compChoice, humanChoice) {
    humanChoice = humanChoice.toUpperCase();

    console.log("Computer: " + compChoice);
    console.log("Human: " + humanChoice);

    if (humanChoice === "ROCK" && compChoice === "ROCK"){
        console.log("Tie!")
    } else if (humanChoice === "ROCK" && compChoice === "PAPER"){
        console.log("You Lose!")
    } else if (humanChoice === "ROCK" && compChoice === "SCISSORS"){
        console.log("You Win!")
    }
}

playRound(getComputerChoice(), getHumanChoice());