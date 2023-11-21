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
console.log(getComputerChoice())

//  step 2: define function for a single round
   
const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    // your code here!
  if (playerSelection === computerSelection){
     return "draw"
  }

  else if (playerSelection === "rock" && computerSelection === "Paper"){
    return "You win! Paper beats Rock"
  }

  else {
    return "You Lose! Paper beats Rock"
  }
}

console.log(playRound(playerSelection,computerSelection))







// function playRound(playerSelection, computerSelection {

// const playerScore = 0
// const computerScore = 0
//      if (playerSelection === computerSelection) {
//            console.log (Draw")
//     }  

//     else if  ((playerSelection === "Rock" && computerSelection === "Scissors") ||
//     (playerSelection === "Paper" && computerSelection === "Rock") ||
//     (playerSelection === "Scissors" && computerSelection === "Paper")
// )   {
//     computerScore++
//     console.log("You win")
//     }
    


