// singleton
// Object.create

// Important Question: take a symbol and create a object with that symbol as a key. 
//then try to access the value of that key.


// objects literal: key-value pairs separated by commas and enclosed in curly braces {} 


let mySym = Symbol('the symbol1');
const user = {
    name: "Abu",
    "full name": "Abu Bakkar Siddique",
    [mySym]: "the symbol2",
    age: 25,
    location: "Bahaddarhat ,chittagong",
    email: "abubecore007@gmail.com",
    isLogin: true,
    lastLoginDay: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

}
console.log(user.name);
console.log(user["name"]);

console.log(user[mySym]); // the symbol2
console.log(typeof mySym);  // symbol

console.log(user["full name"]); // Abu Bakkar Siddique
console.log(user.lastLoginDay[1]); // monday



// freeze an object:

user.name = "Riki"
console.log(user.name); // Riki

// Object.freeze(user);
user.name = "Riki Ahmed" // it will not change the value of name property because the object is frozen 
console.log(user.name); // Riki

user.greeting = function () {
    console.log("Hello World");
}
console.log(user.greeting); // undefined
console.log(user.greeting());  // Hello World




user.greeting2 = function () {
    console.log(`Hello World, its ${this.name} from ${this.location}`);
}

user.greeting2(); // Hello World, its Abu from Bahaddarhat ,chittagong

