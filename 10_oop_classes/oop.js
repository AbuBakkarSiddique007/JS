//1. Abstraction
// class coffeeMachine {
//     makeCOffee() {
//         this.boilWater()
//         this.brewCoffee()
//         this.pourInCup()
//         console.log("Coffee is ready");

//     }
//     boilWater() {
//         console.log("Boiling water");

//     }
//     brewCoffee() {
//         console.log("brewing Coffee");

//     }
//     pourInCup() {
//         console.log("pouring coffee into cup");

//     }

// }
// const myCoffeeMachine = new coffeeMachine()

// myCoffeeMachine.makeCOffee()



// start::
//Object literal:
//literally a object:
// const user = {
//     name: 'abu bakkar siddique',
//     loginCount: 8,
//     singIn: true,

//     getUserDetails: function () {
//         a = 121
//         // console.log("got user details from database");
//         // console.log(`the username is : ${this.name}`);
//         // console.log(this); //In current context
//         // console.log(`the value of a is : ${a}`);

//     }
// }

// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this); //In global context



//Constructor function:

function user(username, id, isLoggedIn) {
    this.username = username
    this.id = id
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = user('Abu Bakkar Siddique', 23, true)
const userOne = new user('Abu Bakkar Siddique', 23, true)


// const userTwo = user('riki ahmed', 25, false)
const userTwo = new user('riki ahmed', 25, false)


// console.log(userOne); //over write
/* username: 'riki ahmed',
  id: 25,
  isLoggedIn: false */


console.log(userOne);
/*
user { username: 'Abu Bakkar Siddique', id: 23, isLoggedIn: true }
*/

console.log(userTwo);
/*
user { username: 'riki ahmed', id: 25, isLoggedIn: false }
*/








