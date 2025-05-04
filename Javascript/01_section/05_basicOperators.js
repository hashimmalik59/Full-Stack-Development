// Basic Operators

let currentYear = 2025;
let myAge = currentYear - 2002;
console.log(myAge);
let myBrotherAge = currentYear - 2007;
console.log(myBrotherAge);

console.log(myAge * 2, myAge / 2, 2 ** 3);
// 2 ** 3 means => 2 to the power of 3 => 2 * 2 * 2

let firstName = "Hashim";
let lastName = "Malik";
console.log(firstName + " " + lastName); // adding space " " between them


// Assignment Operator
let x = 10 + 5; // 15
x += 10; // 25 and x += 10 => x = x + 10
console.log(x);

// "=" equal to sign is assignment operator which mean 10 + 5 is assigned to "x"

// Unary Operators(increment and decrement)
x++ // => x = x + 1 (Postfix) it will add after
x-- // => x = x - 1 (Postfix) it will sub after
++x // => x = x + 1 (Prefix) it will add before
--x // => x = x + 1 (Pretfix) it will sub before

// Comparison Operators
console.log(myAge > myBrotherAge); // true bacause my age(23) is greater then my brother age(18)