// Scope in Practice
"use strict";

function calcAge(birthYear) {
  const myAge = 2025 - birthYear;
  console.log(firstName);
  return myAge;
}

console.log(firstName);
const firstName = "Hashim";

console.log(calcAge(2002));

console.log(sumTwoNums(2, 4));
function sumTwoNums(a, b) {
  return a + b;
}

addTwoNum(2, 3); // ReferenceError: Cannot access 'addTwoNum' before initialization
const addTwoNum = function (x, y) {
  return x + y;
};

function a() {
  var b = 10;
  console.log(`Indar wala: ${b}`);
}
console.log(`Bahar wala: ${b}`);
a();

{
  var c = 10;
}
console.log(c);
