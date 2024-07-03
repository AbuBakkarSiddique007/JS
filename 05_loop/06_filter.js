let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNum.forEach((item) => {
//     console.log(item);
// })
//ex:01
let myNumber = myNum.filter((num) => {
    return num > 4
})
// console.log(myNumber);
//[ 5, 6, 7, 8, 9, 10 ]


//ex:02
let newNum = []
myNum.forEach((num1) => {
    if (num1 > 4) {
        newNum.push(num1)
    }
})

// console.log(newNum);
//output:
//[ 5, 6, 7, 8, 9, 10 ]

//ex:01 and ex:02 same.


//ex:03

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// books.forEach((item) => {
//     console.log(item);
// })

let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);