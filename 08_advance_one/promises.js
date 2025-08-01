// // const promiseOne = new Promise(function(resolve ,reject){
// //     //Do an async task
// //     //DB calls , cryptography , network
// //     setTimeout(function(){
// //          console.log('Async task is completed');
// //          resolve()
// //     },1000)
// // })

// // promiseOne.then(function(){
// //     //use
// //     console.log("promise consumed ");
    
// // })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
        
//     }, 1000)
// }).then(function () {
//     console.log("async is resolved");
    
// })

// const promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve({userName : "Ved" , email : "ved@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function (resolve, reject) { // added resolve and reject here
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ userName: "Ved", password: "1234" });
//         } else {
//             reject('something went wrong');
//         }
//     }, 1000);
// });

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.userName;
//     })
//     .then((userName) => {
//         console.log(userName);
//     })
//     .catch(function (error) {
//         console.log(error);
//     }) .finally(()=>{
//         console.log("The promise is either resolved or rejected");
//     });


const promiseFive = new Promise( function(resolve , reject){
    setTimeout(function () {
        
        let error = false 
        if(!error){
            resolve({userName: "javascript" , password : "1234"})
        }else{
            reject('Error : Js went wrong ')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response =  await promiseFive 
        console.log(response);
    } catch (error) {
        
    }
    
    
}

consumePromiseFive()