// Datatypes

// Every value has type either object or non-object = primitive

// Non-Primitive Datatype
let MyData = { // object
    fullName: "Hashim Malik",
    myAge: 23,
    isAdult: true,
}

// Primitive Datatype
let fullName = "Hashim Malik";
let mAge = 23;
let isAdult = true;

// We have 7 prmitive datatype

// Number => 2*53
// String => "sfsdfsd"
// Boolean => true/false
// undefined => let name;
// null => stand alone value
// Symbol => uniqueness
// BigInt => for big numbers

// typeof: this operator check type of a value like
console.log(typeof "Hashim");
console.log(typeof 23);
console.log(typeof true);

let isJavascriptFun = true;
console.log(isJavascriptFun);

isJavascriptFun = "Yes!"; // reassign the value(let keyword allowed reassignment)
console.log(isJavascriptFun);

let data; // undefined we cannot assign a value to the variable(data)
console.log(data);
console.log(typeof data);