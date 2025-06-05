// Looping Arrays: Breaking And Continuing

const myData = [
    "Hashim",
    23,
    true,
    ["HTML", "CSS", "JS"],
];

const typeofArray = [];
console.log(myData);
for (let i = 0; i < myData.length; i++) {
    // console.log(`${myData[i]}, ${typeof (myData[i])}`);

    // Filling the type of array
    // typeofArray[i] = typeof myData[i];
    typeofArray.push(typeof myData[i]);
    // typeofArray.push(myData[i]);
}
// console.log(typeofArray);

// Note: If we loop through an array then we always start(initialized) with zero "0"

const ages = [1948, 1974, 2000, 2001, 2007];
const newAges = [];
let currentYear = 2025;
for (let i = 0; i < ages.length; i++) {
    newAges.push(currentYear - ages[i]);
}
// console.log(newAges); // Alhamdulillah

// Continue and Break

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 4) {
        // break; // is used to immediately exit a loop "4 se pehle rok do"
        console.log(`${numbers[i]}: mera favourite number!`);
        continue; // The continue keyword skips the current iteration of a loop and moves to the next one. It doesn’t exit the loop like break, it just says "iss baar ka skip maaro, agli iteration pe chalo."
    }
    console.log(`${numbers[i]}`);
}

// Note:
// 🔹 break situation:
// "Bhai, yeh party chhodo, main jaa raha hoon!"
// (Loop se exit)

// 🔹 continue situation:
// "Is bande se nahi milna, agli pe jao!"
// (Skip that one person, baaki sabse milte raho)