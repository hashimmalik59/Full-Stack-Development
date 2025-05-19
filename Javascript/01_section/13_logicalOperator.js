// Logical Operator

// const hasDriversLicense = false;
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision); // because one condition is false
console.log(hasDriversLicense || hasGoodVision); // because one condition is true
console.log(!hasDriversLicense); // because false opposite is true

//  true                 true
if (hasDriversLicense && hasGoodVision) {
    //  false                true
    // if (hasDriversLicense && hasGoodVision) { // because one is false and one is true so that's why else condition is executes
    console.log(`Hashim is able to drive!`);
} else {
    console.log(`Someone else should drive!`);
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

const isEligibleForDrive = hasDriversLicense && hasGoodVision && !isTired;

if (isEligibleForDrive) {
    console.log("Hashim go and drive!");
} else {
    console.log("Rickshaw karwa!");
}