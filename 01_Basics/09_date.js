//date in js::

//Date object is used to work with dates and times.
//Date objects are created with new Date() constructor.
//There are four ways of instantiating a date:

//new Date() // current date and time
//new Date(milliseconds) //milliseconds since 1970/01/01
//new Date(dateString)
//new Date(year, month, day, hours, minutes, seconds, milliseconds)

//new Date() // current date and time
let currentDate = new Date();
console.log(currentDate);

//new Date(milliseconds) //milliseconds since 1970/01/01
let date = new Date(0);
console.log(date);

//new Date(dateString)
let date1 = new Date("2020-12-25");
console.log(date1);

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
let date2 = new Date(2020, 11, 25, 10, 30, 30, 0);
console.log(date2);


//+++++++++++++++++++++++++++ +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})
