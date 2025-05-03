// let, const and var

let myAge = 23;
myAge = 24; // Reassignment allowed

const birthYear = 2001;
// birthYear = 2002; // Reassignment not allowed
// TypeError: Assignment to constant variable.

// const job; // variable declaration not allowed
// SyntaxError: Missing initializer in const declaration

// Tip: When you sure you cannot change value then use const

// Tip: When you sure in future you change the value for some reason then use let

var job = "Programmer";
job = "Teacher" // Reassignment allowed

lastName = "Malik"; // we can assign a variable without any let, const and var(but not a good practice)
console.log(lastName);
