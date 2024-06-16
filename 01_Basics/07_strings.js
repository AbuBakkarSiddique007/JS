const name = "AbuBakkarSiddique"
const repoCount = 50

// console.log(name + repoCount + " Value");  //Recommended to not use this method for concatenation.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //Recommended to use this method for concatenation. 

const gameName = new String('abcdefghijklmnopqust') //String Object

// console.log(gameName[0]); //  a
// console.log(gameName.__proto__); // String Object Prototype 


// console.log(gameName.length); 
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// // const newString = gameName.substring(0, 4)
// // console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));