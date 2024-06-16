// Stack and Heap

// Primitive (Stack) and Non Primitive (Heap)

//Primitive (Stack)
let name1 = "abu"
let name2 = "bakkar"

name2 = name1 // name2 = "abu"

name2 = "siddique" // name2 = "siddique"

// console.log(name1); // abu
// console.log(name2); // siddique


// Non Primitive (Heap)
let user1 = {
    name: "abu",
    id: 1
}

let user2 = user1

user2.name = "siddique"

console.log(user1.name); // siddique
console.log(user2.name); // siddique
