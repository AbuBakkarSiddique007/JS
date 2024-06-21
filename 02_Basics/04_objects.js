// Initializing tinderUser object
let tinderUser = {};
tinderUser.id = "e201";
tinderUser.name = "Abu";
tinderUser.age = 25;
tinderUser.location = "Chittagong";
tinderUser.isLogin = true;
tinderUser.lastLoginDay = ["sunday", "monday"];

console.log(tinderUser);

// Defining nested object regularUser
const regularUser = {
    email: "abubecore007@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abu",
            lastName: "Bakkar Siddique"
        }
    }
};

console.log(regularUser.fullName.userFullName.firstName); // "Abu"
console.log(regularUser.fullName); // { userFullName: { firstName: "Abu", lastName: "Bakkar Siddique" } }

// Merging objects using Object.assign
let newUser = Object.assign(tinderUser, regularUser);
console.log(newUser === tinderUser); // true
console.log(newUser === regularUser); // false

// Merging objects using Object.assign with empty target object (recommended)
let newUser2 = Object.assign({}, tinderUser, regularUser);
console.log(newUser2 === tinderUser); // false
console.log(newUser2 === regularUser); // false

// Merging objects using spread operator (most recommended)
let newUser3 = { ...tinderUser, ...regularUser };
console.log(newUser3);

// Working with keys, values, and entries
const riki = [
    { id: 1, name: "Abu" },
    { id: 2, name: "Bakkar" },
    { id: 3, name: "Siddique" }
];

let abcd = riki[1].name;
console.log(abcd); // "Bakkar"

// Object keys, values, and entries
const keys = Object.keys(tinderUser);
console.log(keys); // ["id", "name", "age", "location", "isLogin", "lastLoginDay"]

const values = Object.values(tinderUser);
console.log(values); // ["e201", "Abu", 25, "Chittagong", true, ["sunday", "monday"]]

const entries = Object.entries(tinderUser);
console.log(entries); // [["id", "e201"], ["name", "Abu"], ["age", 25], ["location", "Chittagong"], ["isLogin", true], ["lastLoginDay", ["sunday", "monday"]]]

const d = {
    a: 1,
    b: 2,
    c: 3
};

const dKeys = Object.keys(d);
const dValues = Object.values(d);
const dEntries = Object.entries(d);

console.log(dKeys); // ["a", "b", "c"]
console.log(dValues); // [1, 2, 3]
console.log(dEntries); // [["a", 1], ["b", 2], ["c", 3]]

// Object Destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Old way of extracting properties
const oldName = person.name;
const oldAge = person.age;
const oldCity = person.city;

console.log(oldName, oldAge, oldCity); // "John" 30 "New York"

// New way using destructuring
const { name, age, city } = person;

console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"

// Nested object destructuring
const person2 = {
    name: "John",
    age: 30,
    city: "New York",
    job: {
        title: "Software Developer",
        company: "Google"
    }
};

const { name: personName, age: personAge, city: personCity, job: { title, company } } = person2;

console.log(personName); // "John"
console.log(personAge); // 30
console.log(personCity); // "New York"
console.log(title); // "Software Developer"
console.log(company); // "Google"

// Renaming variables
const { name: personName2, age: personAge2, city: personCity2 } = person;
console.log(personName2); // "John"
console.log(personAge2); // 30
console.log(personCity2); // "New York"

// Default values
const person3 = {
    name: "John",
    age: 30
};

const { name: personName3, age: personAge3, city: personCity3 = "London" } = person3;

console.log(personName3); // "John"
console.log(personAge3); // 30
console.log(personCity3); // "London"
