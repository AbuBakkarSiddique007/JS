//Let, const and var::

/*
Variables in JavaScript:

let name = "Alice"; // 'let' is block-scoped
const age = 25; // 'const' is block-scoped and cannot be reassigned
var isStudent = true; // 'var' is function-scoped

Prefer not to use var
because of issue in block scope and functional scope

variable declaration:
let message = "Hello, World!"; // String
let number = 123; // Number
let isTrue = false; // Boolean
let person = { firstName: "Alice", lastName: "Smith" }; // Object
let colors = ["red", "green", "blue"]; // Array
let x = undefined; // Undefined
let y = null; // Null

*/


const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


//output :
// 144553
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 144553      │
// │ 1       │ 'hc@hc.com' │
// │ 2       │ '21212121'  │
// │ 3       │ 'Bengaluru' │
// │ 4       │ undefined   │
// └─────────┴─────────────┘

