// if

const isUserloggedIn = true
const temperature = 41

// if(temperature === 40 ){
//     console.log("less than 50");
// } else{
//     console.log("temerature is greter than 50");
// }

// < , > , <= , >= , == , != , ===


// if ( score > 100 ){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);


// const balance = 1000

// // if( balance > 500 ) console.log("test");

// if( balance < 500 ){
//     console.log("less than");
//  } else if(balance < 750 ){
//     console.log("less than 750");
//  } else{
//     console.log("less than 1200");
    
//  }


const  userLoggedIn = true 
const  debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard ){
   console.log("Allow to buy course");
}


 if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Login Succesfully !!");
} else{
    console.log("Error !!");
}