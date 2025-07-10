
let score = "33";
console.log(typeof score); // number


// Convert string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number



/*

"33" => 33 (number)
"33abc" => NaN (not a number)
true => 1 (boolean to number)
*/



let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true , 0 => false , "hitesh" => true , "" => false


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string
