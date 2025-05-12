// JS Fundamentals Part 1 Assignment

// Values and Variables
// Declare variables called country, continent and population and assign their values according to your own country(population in millions).

// Log their values to the console.

const myCountry = "Pakistan";
const myContinent = "Asia";
let myCountryPopulation = "250000000";

console.log(myCountry, myContinent, myCountryPopulation);

//////////////////////////////////////////

// Data Types tasks

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// Log the types of isIsland, population, country and language to the console.

let isIsland = true;
let myCountryLanguage;
console.log(isIsland, myCountryPopulation, myCountry, myCountryLanguage);

//////////////////////////////////////////

// let, const and var
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.

myCountryLanguage = "Urdu";

//////////////////////////////////////////

// Basic Operators
// If your country split in half, and each half would contain half the population, then how many people would live in each half?
// Increase the population of your country by 1 and log the result to the console.
// Finland has a population of 6 million. Does your country have more people than Finland?
// The average population of a country is 33 million people. Does you country have less people than the average country?
// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

myCountryPopulation /= 2;
console.log(myCountryPopulation);

myCountryPopulation /= 2;
console.log(myCountryPopulation);

let newPopulaiton = 25000000000 + 1;
console.log(newPopulaiton);

let populationOfFinland = 6000000;

console.log(newPopulaiton > populationOfFinland);

console.log(myCountryPopulation + " is less then our 33M population");

let europeanCountry = "Portugal";
let continentOfPortugal = "Europe"
let populationOfPortugal = 11;
let portugalPopulationInMillion = "M";
let laguageOfPortugal = "portuguese"

console.log(europeanCountry + " is in " + continentOfPortugal + ", " + "and it's " + populationOfPortugal + portugalPopulationInMillion + " people speak " + laguageOfPortugal);


//////////////////////////////////////////

// Strings and Template Literals
// Recreate the description variable from the last assignment, this time using the template literal syntax.


console.log(`${europeanCountry} is in ${continentOfPortugal}, and it's ${populationOfPortugal}${portugalPopulationInMillion} people speak ${laguageOfPortugal}`);