//object =>>for in
//array =>> for of

const myObj = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key1 in myObj) {
    // console.log(key1);
    // console.log(myObj[key1]);
    // console.log(`${key1} stands for ${myObj[key1]}`);

}

//output1:
// js
// cpp
// py
// rb

//output2:
// javascript
// c++
// python
// ruby

//output3:
// js stands for javascript
// cpp stands for c++
// py stands for python
// rb stands for ruby


//In array:
const array1 = ["js", "py", "cpp", "rb"]

for (const arr in array1) {
    // console.log(arr);
}

//output:
// here its gives just the index num
// 0
// 1
// 2
// 3


//In maps:
const map = new Map()
map.set('BD', "Bangladesh")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('BD', "Bangladesh")

for (const keys in map) {
    console.log(keys);
}

// output:
// Did not get any output.