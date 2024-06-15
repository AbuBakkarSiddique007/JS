//Datatypes and ECMA standards::

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Abu Bakkar Siddique")


let name = "Abu Bakkar Siddique"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined
console.log(typeof 2n); // bigint


// object
console.log(typeof undefined); // undefined
console.log(typeof null); // object



//Output:
// $ node 01_Basics/02_dataTypes.js
// 6
// Abu Bakkar Siddique
// string
// number
// boolean
// undefined
// bigint
// undefined
// object