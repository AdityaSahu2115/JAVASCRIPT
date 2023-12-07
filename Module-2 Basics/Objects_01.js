// singleton
// Object.create->next file

// object literals

const mySym = Symbol("key1")

//creation of object using object literal
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//this full name key canot be accessed using dot operator,can be accessed only by using array symbol
    [mySym]: "mykey1",//->accessing the symbol data type like this 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])   We can access the object keys of string using the [] symbol
// console.log(JsUser[mySym]) Accessing the symbol data type

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  -->Freezing the object so that no further changes can be made into the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//Accssing the reference to the object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());