// DOM Manipulation

const headingOne = document.querySelector("h1"); // Selecting an element
console.log(headingOne);
headingOne.textContent = "New h1"; // Manipulating the Text

const myDIV = document.createElement("div"); // Creating new element
console.log(myDIV);
myDIV.textContent = "My new div";
document.body.appendChild(myDIV);
myDIV.style.backgroundColor = "red"; // Styling an element

const greetButton = document.createElement("button");
greetButton.textContent = "Greeting";
document.body.appendChild(greetButton);
greetButton.addEventListener('click', function () { // Event click
    alert("Hello DOM!")
})