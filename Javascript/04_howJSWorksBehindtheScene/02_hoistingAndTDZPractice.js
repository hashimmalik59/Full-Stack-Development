// Variable Environment: Hoisting & TDZ

// Varaible Environment: "Memroy Creation Phase mein variable ka naam, value, and scope banna"
// Hoisting: "Naam upar le jaaya gaya hai!"
// TDZ: "Naam to upar gaya hai, lekin abhi use nahi kar sakte — ruk jao jab tak value na mil jaye!"

// x();
// var x = function () {
// TypeError: x is not a function
// let x = function () {
// ReferenceError: cannot access "x" before initiazation
// const x = function () {
// ReferenceError: cannot access "x" before initiazation
//   console.log("x");
// };
// Note: Function Expression and in Arrow will give you error with let var const
// var is typeError: x is not defined
// let is referenceError: Cannor access "x" before initialization
// const is referenceError: Cannor access "x" before initialization

// ("use strict");
// {
//   function a() {
//     console.log(1 + 6);
//   }
// }
// a();

// Note: with strict mode(ReferenError: a is not defined)

// Variables Hoisting

// console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(birthYear); // ReferenceError: Cannot access 'birthYear' before initialization

var me = "Hashim";
let job = "TA";
const birthYear = 2002;

// function

console.log(addDeclaration(1, 2)); // 3 (because this one invoked)
// console.log(addExpression(3, 4)); // RefereneError: Cannot access 'addExrepssion' before initialization
// console.log(addArrow(5, 6)); // // RefereneError: Cannot access 'addArrow' before initialization

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (c, d) {
  return c + d;
};

const addArrow = (e, f) => e + f;

let b = 0;
{
  function a() {
    console.log(b);
    a();
  }
}
