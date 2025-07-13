// Destructuring Arrays

// Destructuring: object ya array k andar ki values ko individually kisi variable mein store karna
const fullName = ["Hashim", "Malik"];

// is approach se bachne k liye humm destructuring karte hain
// const a = fullName[0];
// const b = fullName[1];

const [firstName, lastName] = fullName;
console.log(firstName, lastName);
// console.log(a, b);
console.log(typeof (firstName, lastName));
// console.log(typeof (a, b, ));

const arr = ["Hashim", "apple", 23, true, "potato"];

let [a, b, ...c] = arr; // "c" walre variable mein rest(baqi jitne bach gaye woh sab c mein put kar) tak jata hai
console.log(a, b, c);

let [d = 1, e = 1, f = 1, g = 1, h = 1, i = 1] = arr; // default value: jab value na hoto undefined ki jagah default value replace kardeti hai like 'i' k case mein 1
console.log(d, e, f, g, h, i);
