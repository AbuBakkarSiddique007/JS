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




function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""))
console.log(loginUserMessage("riki"))