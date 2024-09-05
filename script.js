let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 100 );
    console.log(rand);
    if (rand <= 33) {
        return "Rock";
    } else if (rand <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice () {
    let answer = prompt("Please choose Rock, Paper, or Scissors!");
    return answer;
}

console.log(getHumanChoice());

console.log(getComputerChoice());