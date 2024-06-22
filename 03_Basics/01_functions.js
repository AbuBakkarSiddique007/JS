// Functions::

// 1. Function without parameter
function sayMyName(name) {
    console.log("abu bakkar siddique");
}
// sayMyName(); // abu bakkar siddique



// 2. Function with parameter
function sayMyName2(name) {
    console.log(name);
}
// sayMyName("abu bakkar siddique"); // abu bakkar siddique




// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function greet(name = "sam") {
    console.log(`hello, ${name}`);
}
// greet();



function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("riki"))


// Rest Operator in function parameter 
function calculateCartPrice(val1, val2, ...number1) {
    return number1
}

console.log(calculateCartPrice(1, 2, 3, 4));



// function with object:
function greetUser(user) {
    console.log(`Hello, ${user.name}`);
}

const user = {
    name: "abu bakkar siddique",
    age: 25
}

// greetUser(user);

// //////////////

function abcd(user) {
    console.log(`Hello, ${user.name}`);
}

abcd({
    name: "abu bakkar siddique",
    age: 25
});



// function with object destructuring:
function greetUser2({ name, age }) {
    console.log(`Hello, ${name}`);
}
// greetUser2(user);




// function with object destructuring and default value:
function greetUser4({ name, age } = { name: "sam", age: 25 }) {
    console.log(`Hello, ${name}`);
}

// greetUser4(user);
// greetUser4();

// function with array destructuring:
const user2 = ["abu bakkar siddique", 25]

function greetUser3(getArray) {
    return `Hello, ${getArray[0]}`;
}

greetUser3(user2);

// greetUser3(user2);
