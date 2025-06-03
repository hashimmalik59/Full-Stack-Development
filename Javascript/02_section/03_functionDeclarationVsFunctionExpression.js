// Function Declaration vs Function Expression

// Function Declaration
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("Hashim", "Malik");

// Function Declaration
myFullName("Hashim", "Malik"); // ReferenceError: Cannot access 'myFullName' before initialization
const myFullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
}
myFullName("Hashim", "Malik");

// Note: Difference btw both is we cannot call function declaration before declaration