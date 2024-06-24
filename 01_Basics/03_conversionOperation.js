//Datatype conversion confusion::

// In JavaScript, there are three types of conversions:
// The Procedure::

// convert into string:
// datatype variableName = value;
// datatype NewVariableName = String(variable);
// console.log(typeof NewVariable) // string
// console.log(NewVariable) // value


// convert into number:
// datatype variableName = value;
// datatype NewVariableName = Number(variable);
// console.log(typeof NewVariable) // number
// console.log(NewVariable) // value


// convert into boolean:
// datatype variableName = value;
// datatype NewVariableName = Boolean(variable);
// console.log(typeof NewVariable) // boolean
// console.log(NewVariable) // value


// 1. String Conversion:
let value = true;
console.log(typeof value); // boolean

let valueInString = String(value); // now value is a string "true"
console.log(typeof valueInString); // string
console.log(valueInString); // true


// 2. Number Conversion:
let str = "123";
console.log(typeof str); // string

let num = Number(str); // now value is a number 123
console.log(typeof num); // number
console.log(num); // 123


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// Important: 
// If the string is not a valid number, the result of such a conversion is NaN. 
//For instance:
let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN


// The Number(value) function will convert:
// A string into a number. White-spaces from the start and end are removed. 
//If the whole string is not a valid number, the result is NaN.

// null becomes 0
// undefined becomes NaN
// true and false becomes 1 and 0
// For instance:
console.log(Number("123")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0


// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered. 
//In this case, we first convert the value to a number and then validate it.


// Automatic conversion is performed in mathematical functions and expressions.
// For example, when division / is applied to non-numbers:
console.log("6" / "2"); // 3, strings are converted to numbers


// Please note that the binary plus + concatenates strings. 
// If any of the operands is a string, it converts the other one into a string as well. 
//For instance:
console.log(1 + "2"); // '12'
console.log("1" + 2); // '12'


// The binary plus + is the only operator that converts operands into strings in such a way. 
// Other arithmetic operators work only with numbers and always convert their operands to numbers.


// 3. Boolean Conversion
// The conversion rule:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN become false.
// Other values become true.
// For instance:
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true


// A summary table for conversion to Boolean:
// Value	                                Becomes…
// undefined, null	                    false
// 0, -0	                            false
// NaN, Infinity, -Infinity	            false
// "", ''	                            false

// Everything else becomes true.


