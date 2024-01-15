/*  1. string conversion
let value = false;
value = String(value)
alert(typeof value)
/* 

/* 2. number conversion
let string = "123"
let num = Number(string) . + unary operator does same thing.
console.log(typeof string)

*/


/*  shorthand for changing new value.
let n = 12;
n = n + 4;
n= n- 1;
n += 5;
n -= 4
*/

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// alert(a + b); // 12




// if satement
// The if(...) statement evaluates a condition in parentheses and, 
// if the result is true, executes a block of code.


/* 
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015){
alert( 'You are right!' );
alert( "You're so smart!" );
}
 */

/* assigning a variable depending on a CSSConditionRule.


let accessAllowed;
let age = prompt("How old are you?")
if (age > 18){
    accessAllowed = true;
} else{
    accessAllowed = false 
}

alert(accessAllowed) */



/* using shorthand ternary operator

let accessAllowed = (age > 18) ? true : false
? = return true
: = else return falßse
no if clause is needed.
no parenthesis is essential
no curly brackets

*/

//  we can prompt our answer or define it in variable
/* let hour = prompt("what hour is it?");
let isWeekend = prompt("is it the weekend?");

if (hour < 10 || hour > 18 || isWeekend == true) {
  alert( 'The office is closed.' );
} else {
    alert("The office is open")
  }

 */

  /*
   OR  - "||" finds the first truthy value
  e.g. result = value1 || value2 || value3;
  In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

   AND “&&” finds the first falsy value

  */



let userName = prompt("Who's there?")
//  if you enter the admin login username correctly prompt password and 
// its if/else clause
 if (userName === "Admin") {

    let enter = prompt( "Password?") ;

    if (enter === "TheMaster") {
        alert( "welcome");
    }   else if (enter === "" || enter === null) {
        alert("Authorization Cancelled");
    }   else{
        alert( "Wrong password");
    }

}   else if (userName === "" || userName === null) {
    alert("Authorization Cancelled");
}   else{
    alert("wrong username");
} 


    

