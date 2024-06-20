const mySymbol = Symbol('mySymbol');

const obj = {
    [mySymbol]: 'value associated with mySymbol'
};

console.log(typeof mySymbol);  // symbol
console.log(obj[mySymbol]); // value associated with mySymbol
