// Destructuring Arrays Practice Assignments

const fruits = ["apple", "banana", "mango"];
// TODO: destructure and store apple in fruit1, banana in fruit2

const [fruit1, fruit2] = fruits;

// console.log(fruit1, fruit2);

const numbers = [100, 200, 300, 400];
// TODO: destructure first two numbers into variables a and b

// const [a, b] = numbers;

// console.log(a, b);

const languages = ["JavaScript", "Python", "C++", "Go"];
// TODO: destructure and skip Python, get JavaScript and C++

const [language1, , language3] = languages;

// console.log(language1, language3);

const colors = ["red"];
// TODO: destructure red into color1 and set default "blue" into color2

const [color1, color2 = "blue"] = colors;

console.log(color1, color2);

const nestedArray = [1, [2, 3], 4];
// TODO: destructure 2 into variable b and 4 into variable c

const [, b, c] = nestedArray;

console.log(b[0], c);

function getCoordinates() {
  // TODO: destructure returned array into lat and lng
  return [25.276987, 55.296249]; // latitude, longitude
}
const [lat, lng] = getCoordinates();

console.log(lat, lng);

const data = ["Hash", , "Malik"];
// TODO: destructure first and last names, skip middle, set default if missing

const [firstName, middleName = "Ahmad", lastName] = data;

// console.log(firstName, middleName, lastName);
