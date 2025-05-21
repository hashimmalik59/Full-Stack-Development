// The Conitional (Ternary) Operator

// The ternary operator in JavaScript is a powerful and concise way to write conditional expressions.

// condition ? expressionIfTrue : expressionIfFalse;

const myAge = 23;
// myAge >= 18 ? console.log("Adult") : console.log("Not Adult");
const adultOrNot = myAge >= 18 ? "Adult" : "Not Adult";
console.log(adultOrNot);

console.log(`I want to use phone because i'm ${myAge >= 18 ? "Adult" : "Not Adult"}`);