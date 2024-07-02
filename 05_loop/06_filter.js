const coding = ["js", "ruby", "java", "python", "cpp"]


let theCode = coding.forEach((item) => {
    // console.log(item)
    return item
})
console.log(theCode);
//output:
// undefined because forEach method does not return any meaningful value.