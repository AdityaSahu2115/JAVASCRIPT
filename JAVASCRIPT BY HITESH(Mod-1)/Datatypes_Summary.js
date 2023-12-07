//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive),Heap(Non Primitive)

let myYoutubeName="hiteshChoudhurydotcom"
let anothername=myYoutubeName
anothername="chaiAurCode"
console.log(myYoutubeName);
console.log(anothername);

// Incase of stack a copy of memory is alloted whereas in case of heap reference to memory is being provided

let userOne={
    email:"usergoogle@gmail.com",
    upi:'user@ybl'
}
let userTwo=userOne
userTwo.upi='user@ybl'
console.log(userOne);
console.log(userTwo);
// Here both the object are referencing to one o a single change in one of them will have a change in both of them

