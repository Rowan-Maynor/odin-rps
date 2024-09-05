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
    // compensates for spelling errors
    humanChoice = humanChoice.toUpperCase();

    console.log("Computer: " + compChoice);
    console.log("Human: " + humanChoice);

    if (humanChoice === "ROCK" && compChoice === "ROCK"){
        console.log("Tie!");
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "ROCK" && compChoice === "PAPER"){
        console.log("You Lose!");
        computerScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "ROCK" && compChoice === "SCISSORS"){
        console.log("You Win!");
        humanScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "PAPER" && compChoice === "PAPER"){
        console.log("Tie!");
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "PAPER" && compChoice === "SCISSORS"){
        console.log("You Lose!");
        computerScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "PAPER" && compChoice === "ROCK"){
        console.log("You Win!");
        humanScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    }  else if (humanChoice === "SCISSORS" && compChoice === "SCISSORS"){
        console.log("Tie!");
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "SCISSORS" && compChoice === "ROCK"){
        console.log("You Lose!");
        computerScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "SCISSORS" && compChoice === "PAPER"){
        console.log("You Win!");
        humanScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    }
}

function playGame(rounds) {
    for(let i = 0; i < rounds; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
}

playGame(5);