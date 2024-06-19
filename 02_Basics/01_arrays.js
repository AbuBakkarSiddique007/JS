// array ::


//Declaration of array:
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Thor", "Hulk", "Captain America", "Black Widow", "Hawkeye"]

// console.log(myArr);
// console.log(myHeros);



// using constructor function :
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// Array methods: 
// push, pop, unshift, shift, includes, indexOf, join, slice, splice 

myArr.push(6) // add element at the end of the array
// console.log(myArr);

myArr.push(7) // add element at the end of the array
// console.log(myArr);

myArr.pop() // remove element from the end of the array
// console.log(myArr);



myArr.unshift(9) // add element at the start of the array
console.log(myArr);

myArr.shift() // remove element from the start of the array
console.log(myArr);

console.log(myArr.includes(9)); // check if element is present in the array
console.log(myArr.indexOf(3)); // find the index of the element in the array



const newArr = myArr.join() // join the array elements with comma separated string.

console.log(myArr);
console.log(newArr);


// slice, splice: 

// slice: it will not change the original array, it will return the new array with the sliced elements. 

// array.slice(begin, end)
// begin: index at which to begin extraction
// end: index at which to end extraction (end is not included)


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice the array from index 1 to 3 ( 3 is not included) 

console.log(myn1); // [1, 2]

console.log("B ", myArr); // here we can see that original array is not changed.


// splice: it will change the original array, it will return the removed elements.
// array.splice(start, deleteCount, item1, item2, ...)
// start: index at which to start changing the array
// deleteCount: number of elements to remove
// item1, item2, ...: elements to add to the array in place of the deleted elements (optional)  


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //  [ 0, 4, 5, 6 ] // here we can see that original array is changed.
console.log(myn2); // [1, 2, 3] // removed elements from the array.


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice() vs splice() in JavaScript::
// slice() and splice() are two methods in JavaScript that are used to extract a portion of an array.


// Purpose:
// slice is used to create a new array by copying a portion of another array,
// while splice is used to modify an array by removing, replacing, or adding elements.


// Original Array:
// slice does not modify the original array; it creates a new one.
// splice modifies the original array.

// Return Value:
// slice returns a new array containing the extracted elements.
// splice returns an array containing the deleted elements.
