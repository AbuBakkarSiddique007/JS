//Promise:
//01:
// const promiseOne = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         console.log('Async task is complete.');
//         resolve()
//     }, 1000)

// })

// promiseOne.then(function () {
//     console.log("Promise consumed");

// })

// output:
// $ node 09.1_advance/promise.js
// Async task is complete.
// Promise consumed

//01: (or)
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async task 2');

//     })
// }).then(function () {
//     console.log('async 2 resolve');

// })


//02:
// const promiseThree = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         resolve({ username: 'abu bakkar siddique', email: 'abubecore007@lol.com' })
//     }, 1000)

// })

// promiseThree.then(function (user) {
//     console.log(user);

// })


//03:
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // let error = true
//         let error = false
//         if (!error) {
//             resolve({ username: 'riki', password: '12345' })
//         }
//         else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//     .then(function (user) {
//         console.log(user);
//         return user.username

//     })
//     .then(function (username) {
//         console.log(username);

//     })
//     .catch(function (error) {
//         console.log(error);

//     })
//     .finally(function () {
//         console.log('The promise is either resolve or rejected');

//     })


//03: (or):
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // let error = true
//         let error = false
//         if (!error) {
//             resolve({ username: 'abu', password: '23233232' })
//         }
//         else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     }

//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

//  
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))