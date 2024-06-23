// Immediately Invoked Function Expressions (IIFE)
// why we use IIFF?
// 1. to avoid global scope pollution. ***
// 2. to avoid naming conflicts.
// 3. to encapsulate variables.
// 4. to create private variables.

// must use after semicolon(;). otherwise, it will throw an error.


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();



((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')