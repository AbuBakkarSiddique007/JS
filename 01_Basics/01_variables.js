//Let, const and var:

/*
Variables in JavaScript:

let name = "Alice"; // 'let' is block-scoped
const age = 25; // 'const' is block-scoped and cannot be reassigned
var isStudent = true; // 'var' is function-scoped


Prefer not to use "var"
because of issue in block scope and functional scope

variable declaration:
let message = "Hello, World!"; // String
let number = 123; // Number
let isTrue = false; // Boolean
let person = { firstName: "Alice", lastName: "Smith" }; // Object
let colors = ["red", "green", "blue", 12, true, false]; // Array
let x = undefined; // Undefined
let y = null; // Null

*/


const accountId = 144553
let accountEmail = "abubecore007@gmail.com"
var accountPassword = "12345"

accountCity = "Chittagong"
let accountState;

// accountId = 2 // not allowed


accountEmail = "riki@gmail.com"
accountPassword = "58585858"
accountCity = "Noakhali"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// 144553
// ┌─────────┬──────────────────┐
// │ (index) │ Values           │
// ├─────────┼──────────────────┤
// │ 0       │ 144553           │
// │ 1       │ 'riki@gmail.com' │
// │ 2       │ '58585858'       │
// │ 3       │ 'Noakhali'       │
// │ 4       │ undefined        │
// └─────────┴──────────────────┘

