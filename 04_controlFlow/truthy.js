const userEmail = "" //ved@example.com

// if( userEmail ) {
//     console.log("Got the user email");    
// } else{
//     console.log("Don't got the user email");
// }

// fasly value :- false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN

// truthy value :- true , 1 , "0" , " false " , "  " , [] , function () {} 

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(" Object is empty ");
    
}

// nulish coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 

console.log(val1);

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


