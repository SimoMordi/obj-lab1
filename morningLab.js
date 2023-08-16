// const myCar = {
//     year: 2009,
//     make: "hyundai",
//     model: undefined,
//     broken: true
// }
// // does every property have  a value
// let arrayOfKeys = Object.keys(myCar) // array of all the keys

// console.log(arrayOfKeys);
// arrayOfKeys.forEach((key) => {
//     console.log(myCar[key]); // now I can check if tese values are undefined
// })

// let myObject = {
//     name: "Thanos"
// }
// // myObject.name = "Thanos"
// // console.log(myObject);
// let objectCopy = {
//     ...myObject,
//     name: "Thanos"
// }

//1.

const carThree = {
    wheels: 3,
    owner: "Simo",
    isBroken: true,
    color: "Red"
}
carThree.price = 10000
carThree['year'] = 2015
carThree.isBroken = false
carThree.owner
 let clientIsInterested;
 
if ( carThree.color === "blue") {
    clientIsInterested = true
} else {
    clientIsInterested = false
}
delete carThree.owner
console.log(clientIsInterested);
console.log(carThree);


//2.

const store = {
    profit: 3,
    manager: "Simo",
    isOpenNow: true,
    isVeryExpensive: false
}
store.location = "Seattle"
store['storeType'] = "barbie store"
store.isOpenNow = false
store.isVeryExpensive
 let canShopHere;
 
if ( !store.isOpenNow && !store.isVeryExpensive ) {
    canShopHere = true
} else {
    canShopHere = false
}
delete store.profit
console.log(canShopHere);
console.log(store);

//3.
const home = {
    rooms: 3,
    bathrooms: 2,
    isForSale: true,
    isInGoodLocation: false
}
home.price  = 20000
home['year'] = 2005
home.isForSale = false
home.bathrooms = "something"
 let  buyHouse;
 
if (!home.isForSale  && home.isInGoodLocation ) {
    buyHouse = true
} else {
    buyHouse = false
}

delete home.isForSale
console.log(buyHouse);
console.log(home);

//4, 5
const Vacation = {
    date : new Date(2023, 7, 16),
    destination: "lasVegas",
    flyingTime: "02:00",
    isGoodLocation: false
}
Vacation.price  = 2000
Vacation['flyingTime'] = "10:00"
Vacation.isGoodLocatione = true
Vacation.date
let goOnVacation;
 
if (Vacation.destination === "lasVegas"  && Vacation.isGoodLocation ) {
    goOnVacation = true
} else {
    goOnVacation = false
}

delete Vacation.isForSale
console.log(goOnVacation);
console.log(Vacation);