// Type Conversion and Coercion

// Type Conversion(Exlicit Conversion)
// Is manually converts from one type to another type
const myBirthYear = "2002";
console.log(myBirthYear); // string
console.log(Number(myBirthYear)); // number (manually converts)
console.log(Number("Hashim")); // NaN (string cannot convert into number)
console.log(String(23), 23);

// Type Coercion(Implicit Conversion)
// Is automatically converts from one type to another type behind the scene
console.log("I'm " + 23 + " years old!"); // string (automatically converts)
console.log("5" - 2 - "3"); // number (automatically converts)
console.log("5" * 2); // number (automatically converts)
console.log("5" / 2); // number (automatically converts)
console.log("5" % 2); // number (automatically converts)

let n = 1 + "1"; // "11"
n = n - 1; // 10
console.log(n);