// Boolean Logic

// Logical Operator

// AND Operator
// true when all true
// Chai
const isMilk = true;
const isSugar = true;
const isBlackTea = true;

// if (isMilk && isSugar && isBlackTea) { // because all is true
if (isMilk && isSugar && isBlackTea) { // because one is fale so false
    console.log(`Chai`);
}

// OR Operator
// true when at least one true
// User logged in method
const isGmailLoggedIn = true;
const isEmailLoggedIn = false;
const isIOSLoggedIn = false;

// if (isGmailLoggedIn || isEmailLoggedIn || isIOSLoggedIn) { // because only one is true so true
if (isGmailLoggedIn || isEmailLoggedIn || isIOSLoggedIn) { // because all are false so false
    console.log(`Your are successfully logged in!`);
}

// NOT Operator
// true when false and false then true it always return opposite
// Light on/off button
const isLight = false;
// const isLight = true;
if (!isLight) {
    console.log(`Button Clicked`);
}