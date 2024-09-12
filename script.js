let humanScoreTotal = 0;
let computerScoreTotal = 0;

const buttons = document.querySelectorAll("button");
const resultMessage = document.querySelector("#resultMessage");
const compScore = document.querySelector("#compScore");
const hmnScore = document.querySelector("#hmnScore");
const controlsP = document.querySelector("#controlsP")

function getComputerChoice () {
    const rand = Math.floor(Math.random() * 100 );
    if (rand <= 33) {
        return "ROCK";
    } else if (rand <= 66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(compChoice, humanChoice) {
    // compensates for spelling errors
    humanChoice = humanChoice.toUpperCase();

    if (humanChoice === compChoice){
        resultMessage.textContent = "Tie!";
    } else if (humanChoice === "ROCK" && compChoice === "PAPER"){
        resultMessage.textContent = "You Lose!";
        computerScoreTotal++;
        compScore.textContent = `Computer Score: ${computerScoreTotal}`;
        hmnScore.textContent = `Human Score: ${humanScoreTotal}`;
    } else if (humanChoice === "ROCK" && compChoice === "SCISSORS"){
        resultMessage.textContent = "You Win!";
        humanScoreTotal++;
        compScore.textContent = `Computer Score: ${computerScoreTotal}`;
        hmnScore.textContent = `Human Score: ${humanScoreTotal}`;
    } else if (humanChoice === "PAPER" && compChoice === "SCISSORS"){
        resultMessage.textContent = "You Lose!";
        computerScoreTotal++;
        compScore.textContent = `Computer Score: ${computerScoreTotal}`;
        hmnScore.textContent = `Human Score: ${humanScoreTotal}`;
    } else if (humanChoice === "PAPER" && compChoice === "ROCK"){
        resultMessage.textContent = "You Win!";
        humanScoreTotal++;
        compScore.textContent = `Computer Score: ${computerScoreTotal}`;
        hmnScore.textContent = `Human Score: ${humanScoreTotal}`;
    } else if (humanChoice === "SCISSORS" && compChoice === "ROCK"){
        resultMessage.textContent = "You Lose!";
        computerScoreTotal++;
        compScore.textContent = `Computer Score: ${computerScoreTotal}`;
        hmnScore.textContent = `Human Score: ${humanScoreTotal}`;
    } else if (humanChoice === "SCISSORS" && compChoice === "PAPER"){
        resultMessage.textContent = "You Win!";
        humanScoreTotal++;
        compScore.textContent = `Computer Score: ${computerScoreTotal}`;
        hmnScore.textContent = `Human Score: ${humanScoreTotal}`;
    }

    if (humanScoreTotal >= 5){
        endGame("HUMAN");
    } else if (computerScoreTotal >= 5){
        endGame("COMPUTER");
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let selection = button.textContent;
        playRound(getComputerChoice(), selection);
    });
});

function endGame(winner){
    const div = document.createElement("div");
    const p = document.createElement("p");

    if(winner === "HUMAN"){
        p.textContent = "Congrats! You won 5 rounds!";
    } else {
        p.textContent = "Sorry! You lost 5 rounds!";
    }

    div.appendChild(p);
    document.body.appendChild(div);

    buttons.forEach((button) => {
        button.remove();
    });

    resultMessage.remove();
    controlsP.remove();
}