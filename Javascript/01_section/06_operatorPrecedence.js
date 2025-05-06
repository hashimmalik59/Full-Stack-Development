// Operator Precedence

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

let currentYear = 2025;
let myBirthYear = 2002;
let myBrotherBirthYear = 2007;

console.log(currentYear - myBirthYear > currentYear - myBrotherBirthYear); // why both value are solved before comparison operator

// Note: Usually all the Math's operators calculate before comparison operators

console.log(25 - 10 - 5); // left to right => 10 answer
// but if right tp left then result will be totally changed
