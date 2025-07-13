
// functions :- functions are reusable blocks of code that perform a specific task.

function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("D");
}

// sayMyName(); // calling the function

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2) ; // this will print the sum of the two numbers
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2; // this will store the sum of the two numbers in a variable
    
    // console.log("Ved");
    // return result; // this will return the result of the function

    return num1 + num2; // this will return the result of the function directly
}

const result = addTwoNumbers(2, 3); // calling the function with arguments

// console.log("result : " , result); // undefined, because the function does not return anything


function loginUserMessage(userName = "Guest"){
    if(!userName){
        console.log("Please enter a valid username");
        return
    }
    return ` ${userName} just logged in`; // this will return the greeting message
}

console.log(loginUserMessage("Ved")); // calling the function with an argument

// console.log(loginUserMessage("")); // calling the function with an empty string

console.log(loginUserMessage()); // calling the function without an argument