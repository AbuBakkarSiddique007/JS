let mySymbol = Symbol("its riki")

let theObject = {
    name: "abu",
    
    "full Name": "Abu Bakkar Siddique",
    age: 25,
    [mySymbol]: "its abu"
}

console.log(theObject["full Name"]);