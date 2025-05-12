// Strings and Template Literals

const firstName = "Hashim"; // string
const job = "Teacher Assistant";
const birthYear = 2002;
const currentYear = 2025;

// concate string variables and string
const Hashim = "I'm " + firstName + "," + " and i am a " + job + " and my age is " + (currentYear - birthYear);
console.log(Hashim); // I'm Hashim, and i am a Teacher Assistant and my age is 23

// Template Literals
// cleaner and readable
// ES6
console.log(`I'm ${firstName}, and i am a ${job} and my age is ${currentYear - birthYear}`); // best practice

console.log("My name is Hashim \n\
     and my age is 23"); // \n\ is used for new line

// With Template Literals new line
console.log(`My name is Hashim
     and my age is 23`); // new line