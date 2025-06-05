// Dot vs Bracket Notation

const myData = {
    firstName: "Hashim",
    lastName: "Malik",
    isAdult: true,
    currentYear: 2025,
    calcAge: function (birthYear) {
        this.myAge = this.currentYear - birthYear;
        return this.myAge;
    }
};
console.log(myData);
console.log(myData.firstName); // Dot Notation
console.log(myData["firstName"]); // Bracket Notation
console.log(myData.calcAge(2002));

const Adult = "Adult";
console.log(Adult);
console.log(myData["is" + Adult]);


// Note: Bracket Notation is best practice