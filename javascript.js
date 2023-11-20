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

