
//  Selecting and defining container to append to 

const container = document.querySelector('#container');
// make new div
const content = document.createElement("div");
// add classlist to the ref
content.classList.add("content");
// add text content to it
content.textContent = 'This is the glorious text-content!';
// append it to container
container.appendChild(content);


// creating buttons and appending to container

// button1
const button1 = document.createElement("button");
// add an id class
button1.className = ("Rock");
// add text 
button1.textContent = ("Rock");
//  Append to div container
container.appendChild(button1);

// button2
const button2 = document.createElement("button");
button2.className = ("Paper");
button2.textContent = ("Paper");
container.appendChild(button2);

// button3
const button3 = document.createElement("button");
button3.className = ("Scissors");
button3.textContent = ("Scissors");
container.appendChild(button3);


// make div container for displaying results


const divResults = document.createElement("div");
container.appendChild(divResults);

// compChoice.textContent = (`Computer chose : ${computerSelection}`);
const compChose = document.createElement("p");
divResults.appendChild(compChose);

// playerChoice.textContent = (`Player chose : ${computerSelection}`);
const playerChose = document.createElement("p");
divResults.appendChild(playerChose);

// playerScore.textContent = ( `Player Score :  ${pScore}`);
const playerScore = document.createElement("p");
divResults.appendChild(playerScore);

// compScore.textContent = ( `Computer Score :  ${cScore}`);
const compScore = document.createElement("p");
divResults.appendChild(compScore);

// functionPlayRound.textContent = (playRound(playerScore , computerSelection));
const functionPlayRound = document.createElement("p");
divResults.appendChild(functionPlayRound);




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
  
  // game start
function game(){
  
  let pScore = 0;
  let cScore = 0;
  let ties = 0;
  let roundsPlayed = 0;
  let welcomePlayer= (alert("Welcome player:  Please choose an option"));

 
  // //   outcomes
  console.log(welcomePlayer); 
  
  if (pScore && cScore == 0){
    playerChose.textContent = (`Player chose :`);
    compChose.textContent = ( `Player Score :  `);
  }

  
     
  //  selecting all buttons instead of individually to run function.
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((button) => {
    button.addEventListener("click",  function alertFunction (){
      playerSelection = button.className;
      let computerSelection = getComputerChoice();
      functionPlayRound.textContent = (playRound( playerSelection , computerSelection));
      compChose.textContent = (`Computer chose : ${computerSelection}`);
      playerChose.textContent = (`Player chose : ${playerSelection}`);
      playerScore.textContent = ( `Player Score :  ${pScore}`);
      compScore.textContent = ( `Computer Score :  ${cScore}`);
      console.log(roundsPlayed)
    })
  });

    
  // play round and determines all outcomes the winner, loser and ties
  function playRound( playerSelection , computerSelection) {
    //  if/else clauses ensure the game breaks at 5 rounds without endlessly continuing
    roundsPlayed++
    
    if(roundsPlayed === 5 && pScore> cScore){
      alert("Game over: Player Wins!!")
      pScore = 0;
      cScore = 0;
   
      alert(" New Game")
      return game();
    }
    else if(roundsPlayed === 5 && pScore == cScore){
      alert("It's a Tie!! Rematch!!");
      pScore = 0;
      cScore = 0;
      alert(" New Game")
      return game();
    }
    else if(roundsPlayed === 5 && cScore> pScore){
      alert("Game over: Computer Wins!!") ;
      pScore = 0;
      cScore = 0;
      alert(" New Game")
      return game();
    }

      
    if  ((playerSelection=== "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    )

      { pScore++;
        return "Round winner: Player ";
      }

    else if((computerSelection === "Rock" && playerSelection  === "Scissors") ||
            (computerSelection === "Paper" && playerSelection=== "Rock") ||
            (computerSelection === "Scissors" && playerSelection === "Paper")
    )

      {cScore++
      return "Round winner: Computer";
      }

    else if((computerSelection === "Rock" && playerSelection === "Rock") ||
            (computerSelection === "Paper" && playerSelection === "Paper") ||
            (computerSelection === "Scissors" && playerSelection === "Scissors")
    )
      {ties++
      return "Draw";
      }
  }
}

game();










