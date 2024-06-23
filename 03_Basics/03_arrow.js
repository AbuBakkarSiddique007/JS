//this :
// 1. "this" is a reference to the object that is currently calling the function.
const user = {
    name: "Abu Bakkar Siddique",
    age: 25,
    greet: function () {
        console.log(`Hello, ${this.name}`);

        console.log(this); // {name: "Abu Bakkar Siddique", age: 25, greet: ƒ}

    },
}
// user.greet(); //Hello, Abu Bakkar Siddique
// user.name = "Siddique";
// user.greet(); //Hello, Siddique 

// console.log(this); // ouput: {} // empty object

// if run the code in browser console, the output will be:
//Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// in browser console, "this" refers to the window object.


// "this" is not working with normal function:
function welcome1() {
    let name = "Abu Bakkar Siddique";
    console.log(`${this.name}`);
}
welcome1() // undefined

// "this" is also not working with arrow function:
const welcome2 = () => {
    let name = "Abu Bakkar Siddique";
    console.log(`${this.name}`);
}
welcome2() // undefined

// arrow function:
const twoAdd = (num1, num2) => {
    return num1 + num2;
}

console.log(twoAdd(2, 3)); // 5

// same but another way:
const twoAdd1 = (num1, num2) => (num1 + num2)

// {require to use return keyword}
// (doesn't require to use return keyword)

console.log(twoAdd1(2, 3)); // 5

// if we have only one parameter:
const square = num => num * num;
console.log(square(5)); // 25

// if we have no parameter:
const sayHello = () => console.log("Hello");
sayHello(); // Hello


// if want to return object:
const returnObject = () => ({ name: "Abu Bakkar Siddique", age: 25 });
console.log(returnObject()); // {name: "Abu Bakkar Siddique", age: 25}
