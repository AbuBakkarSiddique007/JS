// for of::

//["","",""]
//[{},{},{}]

//array::
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
    // console.log(num)
}
//output:
// 1
// 2
// 3
// 4
// 5


//string::
const name = "AbuBakkarSiddique"
for (const nm of name) {
    console.log(nm);
}
//output:
// A
// b
// u
// B
// a
// k
// k
// a
// r
// S
// i
// d
// d
// i
// q
// u
// e


//maps:

const map = new Map()

map.set('BD', 'Bangladesh')
map.set('IN', 'India')
map.set('Fr', 'France')

// console.log(map);


//Each key in a Map must be unique. 
//This means that if you try to set the same key multiple times in a Map, 
//subsequent assignments will overwrite the previous values associated with that key. 

let myMap = new Map();

// Setting values with the same key
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key1', 'value3'); // Overwrites 'value1' with 'value3'

// console.log(myMap.get('key1')); // Output: "value3"
// console.log(myMap.get('key2')); // Output: "value2"

// console.log(myMap.size); // Output: 2 (only two unique entries)


//for of in map:
const map1 = new Map()

map1.set('v1', 'value1')
map1.set('v2', 'value2')
map1.set('v3', 'value3')

// console.log(map1);

// using for of for iterating the map:

for (const theMap of map1) {
    // console.log(theMap);
}
//output:
// [ 'v1', 'value1' ]
// [ 'v2', 'value2' ]
// [ 'v3', 'value3' ]


//De-structuring:

for (const [key, value] of map1) {
    console.log(key, ":-", value)
}
//output:
// v1 :- value1
// v2 :- value2
// v3 :- value3