// Values and Variables in JS

// value: so value is basically a piece of data. it's used the most fundamental unit of programming
// like; "Hashim" is a value

console.log(40 + 8 + 23 + 1);
// 40, 8, 23, 1 are also values these all sum is 61 and 61 is also a value

//   Box          item
let firstName = "Hashim";

// firstName is a box and "Hashim" is an item
// which is stored in the firstName box


//   firstName is a box
//  -------------
//  -           -
//  - "Hashim"  - and "Hashim is a value"
//  -           -
//  -------------

let myName = "Hashim";
console.log(myName);

// JS naming convention

// 1. camelCase: when you hace multiple words then first word, of first letter always be small and then next other word first letter always be capital like;
// let userName;

// 2. Variable name cannot start with number like;
// let 3friends; // uncaught syntaxError invalid or unexpecte token

// 3. Variable names can only store numbers, letters, underscore "_" and dollar "$" sign
// let my_first$Name1 = "Hashim";

// 4. Variable names cannot contain contain reserved JS keyword like;
// let new = 23;

// 5. Never call your variable with just name like;
// let name = "Hashim";
// Note: it's not invalid but not recommended

// 6. Should not start a variable name with uppercase like;
// let FullName = "Hashim Malik";

// 7. Variable names are always be descriptive like;
// myFullName
// userData
// myAge
// not x , y , name, a, b

// Note: apple and APPLE both are different JS is a case-sensitive language

// Task
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name;
name = "Hashim";
admin = name;
console.log(admin);

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

let ourPlanet;
let currentVisitor;