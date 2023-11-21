console.log("Hello World")

// console.log(Math.floor(Math.random() *3))



// step 1 generating random number 
function getComputerChoice (){
    let input = Math.floor(Math.random() *3);

    if (input === 0){
        return "Rock";
    }
    else if (input === 1){
        return "Paper";
    }
    else {
    return "Scissors";
    }

}

//  step 2: define function for a single round
   
const playerSelection = prompt("Rock, Paper or Scissors");
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    // your code here!
  
    if  ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
  )
    {
    return "Player wins! ";
  }

  else if ((playerSelection === "Rock" && computerSelection === "Paper") ||      
           (playerSelection === "Paper" && computerSelection === "Scissors") ||
           (playerSelection === "Scissors" && computerSelection ===  "Rock")
)
    {
    return "You Lose, Computer wins"
    }


  else {
    return "draw";
    }
}

console.log(playRound(playerSelection,computerSelection));
console.log(computerSelection)
//  step 3 making a function for the 5 game round.
 