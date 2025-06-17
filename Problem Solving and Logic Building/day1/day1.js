// Problem: Even or Odd

function checkEvenOdd(evenOdd) {
  if (evenOdd % 2 === 0) {
    return `${evenOdd}: is Even Number!`;
  } else {
    return `${evenOdd}: is Odd Number!`;
  }
}
const result = checkEvenOdd(6);
console.log(result);
