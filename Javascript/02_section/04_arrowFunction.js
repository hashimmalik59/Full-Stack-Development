"use strict"
// Arrow Function

const fullName = firstName => { console.log(firstName) }; // because having syntax of arrow =>
fullName("Hashim");

// Note: In Arrow Function we cannot use multiple parameters without parenthesis "()"



// Implicit Return: When we return a value on the function declartion line;
// Declaration
function ConSoleName() { console.log("Hashim") };
function ConSoleName() { console.log("Hashim"); console.log("Malik"); };

// Expression
// Annonymous
const ConSol = function () { console.log("Hashim Malik") }
// Arrow
const ConSol2 = () => console.log("Hashim Malik");

// Explicit Return: When we return values below the function decleartion;
function ConSoleName2() {
    console.log("Hashim");
}