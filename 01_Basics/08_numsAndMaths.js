//Number and maths object in javascript

//Numbers::
const score = 400
// console.log(score);

const balance = new Number(1000);
// console.log(balance.toString().length); 

console.log(balance.toFixed(2));     // 1000.00
console.log(balance.toPrecision(3)); // 1.00e+3


const num = 123.456;
console.log(num.toPrecision(2));
// 1.2e+2 
//first 2 digits are 1 and 2 and rest are ignored.


//Maths::
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10  //absolute value of a number. example: |x|
console.log(Math.ceil(1.1)); // 2
console.log(Math.floor(1.9)); // 1
console.log(Math.round(1.5)); // 2

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1


console.log(Math.random()); // 0.12345678901234567 //random number between 0 and 1.
console.log(Math.random() * 100); // 12.345678901234567 //random number between 0 and 100. 

console.log(Math.floor(Math.random() * 100)); // 12 //random number between 0 and 100. 
console.log(Math.floor(Math.random() * 100) + 1); // 13 //random number between 1 and 100.
// here we are adding 1 to make sure that the number is not 0.



//For specific range::
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


//Function for random number between a range::
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); // 13 //random number between 1 and 100.





