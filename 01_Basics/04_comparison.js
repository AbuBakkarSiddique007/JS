// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);   // false
// console.log(null == 0);  // false
// console.log(null >= 0);  // true; but why????????

//the reason is that an equality check (==) and the comparison (<,>,<=, >=) work differently.
//In comparisons convert null to a number, treating it as 0.


// console.log(undefined == 0);  // false
// console.log(undefined > 0);   // false
// console.log(undefined < 0);   // false

// ===
// it the check the value with its datatypes.

// console.log("2" === 2); // false