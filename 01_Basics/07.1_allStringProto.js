// 1. charAt(index)
// Returns the character at the specified index.
const str1 = 'Hello';
console.log(str1.charAt(1)); // "e"

// 2. charCodeAt(index)
// Returns the Unicode of the character at the specified index.
const str2 = 'Hello';
console.log(str2.charCodeAt(1)); // 101

// 3. concat(...strings)
// Joins two or more strings.
const str3_1 = 'Hello';
const str3_2 = 'World';
console.log(str3_1.concat(' ', str3_2)); // "Hello World"

// 4. includes(searchString, position)
// Checks if the string contains the specified search string.
const str4 = 'Hello, world!';
console.log(str4.includes('world')); // true

// 5. endsWith(searchString, length)
// Checks if the string ends with the specified search string.
const str5 = 'Hello, world!';
console.log(str5.endsWith('world!')); // true

// 6. indexOf(searchValue, fromIndex)
// Returns the index of the first occurrence of the specified value, or -1 if not found.
const str6 = 'Hello, world!';
console.log(str6.indexOf('o')); // 4

// 7. lastIndexOf(searchValue, fromIndex)
// Returns the index of the last occurrence of the specified value, or -1 if not found.
const str7 = 'Hello, world!';
console.log(str7.lastIndexOf('o')); // 8

// 8. match(regexp)
// Searches a string for a match against a regular expression and returns the matches.
const str8 = 'The rain in Spain stays mainly in the plain';
console.log(str8.match(/ain/g)); // ["ain", "ain", "ain"]

// 9. matchAll(regexp)
// Returns an iterator of all matches in a string against a regular expression.
const str9 = 'The rain in Spain stays mainly in the plain';
const matches = str9.matchAll(/ain/g);
for (const match of matches) {
    console.log(match);
}
// Outputs: ["ain"], ["ain"], ["ain"]

// 10. replace(searchValue, newValue)
// Replaces the first occurrence of a specified value with another value.
const str10 = 'Hello, world!';
console.log(str10.replace('world', 'JavaScript')); // "Hello, JavaScript!"

// 11. replaceAll(searchValue, newValue)
// Replaces all occurrences of a specified value with another value.
const str11 = 'Hello, world! Hello, everyone!';
console.log(str11.replaceAll('Hello', 'Hi')); // "Hi, world! Hi, everyone!"

// 12. search(regexp)
// Searches a string for a specified value or regular expression and returns the position of the match.
const str12 = 'Hello, world!';
console.log(str12.search('world')); // 7

// 13. slice(beginIndex, endIndex)
// Extracts a part of a string and returns it as a new string.
const str13 = 'Hello, world!';
console.log(str13.slice(7, 12)); // "world"

// 14. split(separator, limit)
// Splits a string into an array of substrings.
const str14 = 'Hello, world!';
console.log(str14.split(', ')); // ["Hello", "world!"]

// 15. startsWith(searchString, position)
// Checks if the string starts with the specified search string.
const str15 = 'Hello, world!';
console.log(str15.startsWith('Hello')); // true

// 16. substring(start, end)
// Extracts the characters from a string between two specified indices.
const str16 = 'Hello, world!';
console.log(str16.substring(7, 12)); // "world"

// 17. toLowerCase()
// Converts the string to lowercase.
const str17 = 'Hello, World!';
console.log(str17.toLowerCase()); // "hello, world!"

// 18. toUpperCase()
// Converts the string to uppercase.
const str18 = 'Hello, World!';
console.log(str18.toUpperCase()); // "HELLO, WORLD!"

// 19. trim()
// Removes whitespace from both ends of the string.
const str19 = '  Hello, world!  ';
console.log(str19.trim()); // "Hello, world!"

// 20. trimStart()
// Removes whitespace from the beginning of the string.
const str20 = '  Hello, world!  ';
console.log(str20.trimStart()); // "Hello, world!  "

// 21. trimEnd()
// Removes whitespace from the end of the string.
const str21 = '  Hello, world!  ';
console.log(str21.trimEnd()); // "  Hello, world!"

// 22. padStart(targetLength, padString)
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
const str22 = '5';
console.log(str22.padStart(3, '0')); // "005"

// 23. padEnd(targetLength, padString)
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
const str23 = '5';
console.log(str23.padEnd(3, '0')); // "500"

// 24. toString()
// Returns a string representing the specified object.
const num = 123;
console.log(num.toString()); // "123"

// Summary of Examples
const exampleString = 'JavaScript is awesome!';

// Using various string methods
console.log(exampleString.charAt(0)); // "J"
console.log(exampleString.includes('is')); // true
console.log(exampleString.indexOf('awesome')); // 13
console.log(exampleString.toUpperCase()); // "JAVASCRIPT IS AWESOME!"
console.log(exampleString.split(' ')); // ["JavaScript", "is", "awesome!"]
console.log(exampleString.replace('awesome', 'great')); // "JavaScript is great!"
console.log(exampleString.trim()); // "JavaScript is awesome!"
console.log(exampleString.padStart(25, '*')); // "*****JavaScript is awesome!"
console.log(exampleString.slice(0, 10)); // "JavaScript"
