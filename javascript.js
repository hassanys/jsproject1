console.log("Hello World")

// console.log(Math.floor(Math.random() *3))



// step 1 generating random number 
function get (){
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


// step 2 

function playRound(playerSelection, computerSelection){
    if (playerSelection > computerSelection){
        return " Win";
    }
    else if (playerSelection < computerSelection){
        return "You Lose! Paper beats Rock";
    }
    else{
        return " Draw";
    }
    
}


const playerSelection = "Rock"  ;
const computerSelection = get();

console.log(playRound(playerSelection, computerSelection ))

// 
// function game(playRound, playerSelection, computerSelection){

// if (playerSelection > computerSelection) {
//     return " Player wins";
// }
// else if (playerSelection < computerSelection){
//     return " Computer wins";
// }
// else{
//     return " Draw";
// }
// console.log(playRound(playerSelection, computerSelection));
// console.log(playRound(playerSelection, computerSelection));
// console.log(playRound(playerSelection, computerSelection));
// console.log(playRound(playerSelection, computerSelection));
// console.log(playRound(playerSelection, computerSelection));

// }



// console.log(game(playRound, playerSelection, computerSelection))
// 



//  i didnt account for all possibilities of the code e.g if player is rock or sci and computer is such and such etc.
//  i didnt know how to increment
//  i didnt set an empty variable for the computersocre, 
