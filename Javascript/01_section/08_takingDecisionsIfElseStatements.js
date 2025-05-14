// Taking Decisions: if / else statements

const myAge = 15;
const isOldEnough = myAge >= 18;
if (isOldEnough) { // if condition is true the "if" block is executed
    console.log("Hashim you are eligible for License");
} else { // else condition is executes when "if" condition is false(else condition is optional)
    console.log("You are too young wait for 18");
}

const myBirthYear = 2002;
let century;
if (myBirthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}
console.log(century);