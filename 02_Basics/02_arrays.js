// concatenation of arrays 
//using concat method and spread operator in javascript.

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]);  // accessing the element of the nested array 
// output: flash

// using concat method 
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// using spread operator (recommended)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// flat method in javascript:
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // flat method will flatten the array to the given depth.

console.log(real_another_array); // output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// Array.isArray, Array.from, Array.of methods in javascript:
// Array.isArray: it will check if the given object is an array or not.
// Array.from: it will create an array from array-like or iterable object.
// Array.of: it will create an array from the given arguments.


console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray("AbuBakkarSiddique")) // false
console.log(Array.from("AbuBakkarSiddique")) // output: [ 'A', 'b', 'u', 'B', 'a', 'k', 'k', 'a', 'r', 'S', 'i', 'd', 'd', 'i', 'q', 'u', 'e' ]

onsole.log(Array.from({ name: "AbuBakkarSiddique" })) // interesting output: []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));