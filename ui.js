
// // step 1 generating random number


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
  
//   console.log(getComputerChoice())
  
  
//   //  step 2: define function for a single round
//   //  this has been indented into function game and called with 
//   //  console.log*
  
      
  
  
//   //  step 3 making a function for the 5 game round.
  
    
//   //    inside this function we run our loop which plays 5 games,
//   //    our function which generates the random computer value
//   //    our function which simulates a round.
  
  
    
//     // game start
// //   function game(){
    
//     // let pScore = 0;
//     // let cScore = 0;
//     // let ties = 0;
//     // let welcomePlayer= (alert("Welcome player:  Please choose an option"));
    
  
  
//       // loop for five rounds.
//     // for (let roundsPlayed = 1; roundsPlayed <= 5; roundsPlayed++){
//         //   //  alerts round number prior to prompt of choice.
//         //   if (roundsPlayed < 5 ){
//         //     alert(`Round ${roundsPlayed} : Fight`);
//         //     }
//         //     //  final round alert
//         //     else if (roundsPlayed === 5){
//         //       alert ("Final Round: Fight");
//         //     }
            
//           //  player then enters value . NoCase ignores case sensitivity
//         //   let playerSelection = rock.textContent || paper.textContent || scissors.textContent;        
//         //   let playerScore = playerSelection[0].toUpperCase() + playerSelection.slice(1);
//         //   let computerSelection = getComputerChoice();
  
  
//         //   //If value is other than rock/paper/scissors 
//         //   // player is prompted again to enter a value
//         //   if (playerScore !== "Paper" &&
//         //   playerScore !== "Rock" && 
//         //   playerScore !== "Scissors" &&
//         //   roundsPlayed <= 5)
//         //   {
//         //     alert("Error!! Please enter correct value");
//         //     // ensures that the round is repeated and doesnt move on
//         //     roundsPlayed--
//         //     continue
//         //   }
          
          
  
  
//         // //   outcomes
//         //   console.log(welcomePlayer);
//         //   console.log( `You chose : ${playerScore}`);
//         //   console.log(`Computer chose : ${computerSelection}`);
//         //   //  function playRound determine round outcome which is looped
      
//         //   console.log( `Player Score :  ${pScore}`);
//         //   console.log( `Computer Score :  ${cScore}`);
//         //   console.log(`Tie Number :  ${ties}`);
         
//           // play round and determines all outcomes the winner, loser and ties

//         // let pScore = 0;
//         // let cScore = 0;
//         // let ties = 0;



        const container = document.querySelector('#container');
        // make new div
        const content = document.createElement("div");
        // add classlist to the ref
        content.classList.add("content");
        // add text content to it
        content.textContent = 'This is the glorious text-content!';
        // append it to container
        container.appendChild(content)
        
        
        // Rock
        // create button element
        const rock = document.createElement("button");
        //  add text content to it
        rock.textContent = "Rock";
        // append it to div content
        content.appendChild(rock);
        rock.addEventListener("click", playRound);
        
        
        
        // Paper
        // create button element
        const paper = document.createElement("button");
        
        //  add text content to it
        paper.textContent = "Paper";
        // select it
        // append it to div content
        content.appendChild(paper);
        paper.addEventListener("click", playRound);
        
        
        
        // Scissors
        // create button element
        const scissors= document.createElement("button");
        //  add text content to it
        scissors.textContent = "Scissors";
        // append it to div content
        content.appendChild(scissors);
        scissors.addEventListener("click", playRound);


        // player

        const player = document.createElement("player")
        player.querySelectorAll(b)

// //////////////////////////////////////////////////////////////////

//         console.log(answer)
//         console.log(rock)
//         console.log(paper)
//         console.log(scissors)

    let computerSelection = getComputerChoice();
    let playerSelection = [rock, paper, scissors]
    console.log(playerSelection)
    console.log(playerSelection[2])
    console.log(rock.textContent)
    console.log(computerSelection)

    let roundsPlayed = 0
    let pScore = 0
    let cScore = 0
    function playRound(playerSelection, computerSelection) {
    

          
        if  ((playerSelection[0] === rock && computerSelection === "Scissors") ||
            (playerSelection[1] === paper && computerSelection === "Rock") ||
            (playerSelection[2] === scissors && computerSelection === "Paper")
        )
  
          { pScore++;
            alert( "Round winner: Player ");
          }
  
        else if((playerSelection[0]=== "Rock" && computerSelection  === "Scissors") ||
                (playerSelection[1]=== "Paper" && computerSelection=== "Rock") ||
                (playerSelection[2]=== "Scissors" && computerSelection=== "Paper")
        )
  
          {cScore++
           alert("Round winner: Computer");
          }
  
        else if((playerSelection[0]=== "Rock" && computerSelection === "Rock") ||
                (playerSelection[1]=== "Paper" && computerSelection === "Paper") ||
                (playerSelection[2]=== "Scissors" && computerSelection=== "Scissors")
        )
  
          {ties++
           alert("Round : Draw");
          }
    }      
    //     if(roundsPlayed === 5 && pScore> cScore){
    //     alert("Game, set and match: Player takes set!!");
    //     }
    //     else if(roundsPlayed === 5 && pScore == cScore){
    //     alert("Game, set and match: It's a Tie!! Rematch!!");
    //     }
    //     else if(roundsPlayed === 5 && cScore> pScore){
    //     alert("Game, set and match: Computer takes set!!") ;
    //     }
    //   }
    //   //  what appears after five rounds are played
    //   if(roundsPlayed === 5 && pScore> cScore){
    //     alert("Game, set and match: Player takes set!!");
    //   }
    //   else if(roundsPlayed === 5 && pScore == cScore){
    //     alert("Game, set and match: It's a Tie!! Rematch!!");
    //   }
    //   else if(roundsPlayed === 5 && cScore> pScore){
    //     alert("Game, set and match: Computer takes set!!") ;
    //   }

    // }

  
// make reference to container

// const container = document.querySelector('#container');
// // make new div
// const content = document.createElement("div");
// // add classlist to the ref
// content.classList.add("content");
// // add text content to it
// content.textContent = 'This is the glorious text-content!';
// // append it to container
// container.appendChild(content)


// // Rock
// // create button element
// const rock = document.createElement("button");
// //  add text content to it
// rock.textContent = "Rock";
// // append it to div content
// content.appendChild(rock);
// rock.addEventListener("click", playRound);



// // Paper
// // create button element
// const paper = document.createElement("button");
// //  add text content to it
// paper.textContent = "Paper";
// // append it to div content
// content.appendChild(paper);
// // paper.addEventListener("click", playRound);



// // Scissors
// // create button element
// const scissors= document.createElement("button");
// //  add text content to it
// scissors.textContent = "Scissors";
// // append it to div content
// content.appendChild(scissors);
// // scissors.addEventListener("click", playRound);





