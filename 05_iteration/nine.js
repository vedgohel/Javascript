const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and currval :${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc , curr) => acc+curr, 0)


// console.log(myTotal);


const shoopingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "mobile Dev Course",
        price : 5000
    },
    {
       itemName : "data science course" ,
       price : 12999
    }
]


const priceToPay = shoopingCart.reduce((acc , item) => acc + item.price, 0)

console.log(priceToPay);
