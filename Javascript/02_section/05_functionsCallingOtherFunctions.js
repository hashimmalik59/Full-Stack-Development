// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const juice = `We have ${apples} apples and ${oranges} oranges of juice`
    return juice;
}
console.log(fruitProcessor(2, 4));

// Note: It's not Higher-Order Function and also not Callback Function