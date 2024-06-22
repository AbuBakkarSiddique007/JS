//var c = 300
let a = 300
if (true) {
    let a = 10 // output: 10
    const b = 20 // output: 20
    // console.log("INNER: ", a); 
    var c = 30 // output: 30

}



// console.log(a);
// output: 300

// console.log(b);
// output: ReferenceError: b is not defined
// we just declare b in the if block not in the global scope


// console.log(c);
// output: 30 ??? thats why we use let and const instead of var



// function scope level:

function one() {
    const userName = "Abu Bakkar Siddique"

    function two() {
        const universityName = "IIUC"
        console.log(userName);
    }
    // console.log(universityName);
    // ReferenceError: universityName is not defined.  
    //Because universityName is not defined in the one() function scope. 
    //It is defined in the two() function scope.

    two() // Abu Bakkar Siddique
}
// one() // Abu Bakkar Siddique

// console.log(userName); // ReferenceError: userName is not defined



///////////////////

if (true) {
    const userName = "Abu Bakkar Siddique"
    if (userName === "Abu Bakkar Siddique") {
        const universityName = "IIUC"
        console.log(userName);
    }
    // console.log(universityName);
    // ReferenceError: universityName is not defined.
    // Because universityName is not defined in the if block scope.
    // It is defined in the inner if block scope.
    // So, we can't access it from the outer if block scope.

}

// console.log(userName);
// ReferenceError: userName is not defined
// Because userName is not defined in the global scope.
// It is defined in the if block scope.
