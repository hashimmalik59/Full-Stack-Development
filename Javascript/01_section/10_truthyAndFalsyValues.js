// Truthy and Falsy values

// Truthy values
// Except falsy values
console.log(Boolean("Hashim"));
console.log(Boolean({}));
console.log(Boolean([]));

// Falsy value
// 6 Falsy values: 0, "", undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

// const money = 100;
const money = 0;
if (money) { // because is "money" variable have 0 value and 0 is falsy value so that's why else is executes
    console.log("Don't spend at all!");
} else {
    console.log("You should get a job!");
}

// let height = 123;
let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED!");
}