// Equality Operators == vs ===

// ==: loose equality (is only checks te value)
// ===: Strict Equality (when both value and type are equal to other)

// Note: Both operators always return boolean values

let myAge = 23;
if (myAge == 23) {
    console.log(`I'm an adult because my age is '23': (Loose equality operator)`);
}
if (myAge === 23) {
    console.log(`I'm an adult because my age is '23': (Strict equality operator)`);
}

console.log("1" == 1); // true (because it will type coerced(implicit/automatically) behind the scene converts the type)

// Note: Strict Equlity Operator is not allowed type coercion

const myFavouriteNumber = Number(prompt("Enter you favourite number!"));
if (myFavouriteNumber == 23) {
    // console.log("23 is your favourite number!");
    // console.log(typeof myFavouriteNumber);
}
if (myFavouriteNumber === 23) {
    console.log("23 is your favourite number!");
    console.log(typeof myFavouriteNumber);
}