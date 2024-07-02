const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })



// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


/*
parameter's::
parameter1 = items
parameter2 = array's index number
parameter3 = full array
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {

    console.log(item.languageName);
})


//Important:
const coding1 = ["js", "ruby", "java", "python", "cpp"]


let theCode = coding1.forEach((item) => {
    // console.log(item)
    return item
})
console.log(theCode);
//output:
// undefined because forEach method does not return any meaningful value.


//Consider using methods like map, filter, or reduce,
//which are designed to return a value based on the elements of an array.