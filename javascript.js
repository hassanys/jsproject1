
// step 1 generating random number


function getComputerChoice (){
  let inputVal = Math.floor(Math.random() *3);

    if (inputVal === 0){
      return "Rock";
    }
    else if (inputVal === 1){
      return "Paper";
    }
    else {
    return "Scissors";
    }

}

console.log(getComputerChoice())


// //  step 2: define function for a single round
//  this has been indented into function game and called with 
//  console.log*

    


//  step 3 making a function for the 5 game round.

  
  //  inside this function we run our loop which plays 5 games,
  //  our function which generates the random computer value
  //  our function which simulates a round.


  
  // game start
function game(){
  
  let pScore = 0;
  let cScore = 0;
  let ties = 0;
  let welcomePlayer= (alert("Welcome player:  Please choose an option"));
  


    // loop for five rounds.
  for (let roundsPlayed = 1; roundsPlayed <= 5; roundsPlayed++){
        //  alerts round number prior to prompt of choice.
        if (roundsPlayed < 5 ){
          alert(`Round ${roundsPlayed} : Fight`);
          }
          //  final round alert
          else if (roundsPlayed === 5){
            alert ("Final Round: Fight");
          }
          
        //  player then enters value . NoCase ignores case sensitivity
        let playerSelection = prompt("Rock, Paper or Scissors", "paper");        
        let playerSelectionNoCase = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        let computerSelection = getComputerChoice();


        //If value is other than rock/paper/scissors 
        // player is prompted again to enter a value
        if (playerSelectionNoCase !== "Paper" &&
        playerSelectionNoCase !== "Rock" && 
        playerSelectionNoCase !== "Scissors" &&
        roundsPlayed <= 5)
        {
          alert("Error!! Please enter correct value");
          // ensures that the round is repeated and doesnt move on
          roundsPlayed--
          continue
        }
        
        


      //   outcomes
        console.log(welcomePlayer);
        console.log( `You chose : ${playerSelectionNoCase}`);
        console.log(`Computer chose : ${computerSelection}`);
        //  function playRound determine round outcome which is looped
        console.log(playRound(playerSelectionNoCase , computerSelection));
        console.log( `Player Score :  ${pScore}`);
        console.log( `Computer Score :  ${cScore}`);
        console.log(`Tie Number :  ${ties}`);
       
        // play round and determines all outcomes the winner, loser and ties
    function playRound(playerSelectionNoCase, computerSelection) {
        
      if  ((playerSelectionNoCase === "Rock" && computerSelection === "Scissors") ||
          (playerSelectionNoCase === "Paper" && computerSelection === "Rock") ||
          (playerSelectionNoCase === "Scissors" && computerSelection === "Paper")
      )

        { pScore++;
          return "Round winner: Player ";
        }

      else if((computerSelection === "Rock" && playerSelectionNoCase  === "Scissors") ||
              (computerSelection === "Paper" && playerSelectionNoCase === "Rock") ||
              (computerSelection === "Scissors" && playerSelectionNoCase === "Paper")
      )

        {cScore++
        return "Round winner: Computer";
        }

      else if((computerSelection === "Rock" && playerSelectionNoCase  === "Rock") ||
              (computerSelection === "Paper" && playerSelectionNoCase === "Paper") ||
              (computerSelection === "Scissors" && playerSelectionNoCase === "Scissors")
      )

        {ties++
        return "Round : Draw";
        }
    }
    //  what appears after five rounds are played
    if(roundsPlayed === 5 && pScore> cScore){
      alert("Game, set and match: Player takes set!!");
    }
    else if(roundsPlayed === 5 && pScore == cScore){
      alert("Game, set and match: It's a Tie!! Rematch!!");
    }
    else if(roundsPlayed === 5 && cScore> pScore){
      alert("Game, set and match: Computer takes set!!") ;
    }
  }
}

game();

 
