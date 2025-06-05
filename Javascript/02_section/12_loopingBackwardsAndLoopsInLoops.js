// Looping backwards And Loops in Loops

const myData = ["Hashim", "Malik", 23, true, ["HTML", "CSS", "JS"]];

// 0, 1, ..., 4
// 4, 3, ..., 0

// Looping Backwards
for (let i = myData.length - 1; i >= 0; i--) {
    // console.log(`${i}`);
}

// Loops inside loops

const exercises = ["Pushups", "Squats", "Pullups"];
for (let ex = 0; ex < exercises.length; ex++) {
    console.log(exercises[ex]);
    for (let rep = 1; rep < 13; rep++) {
        console.log(`Repitition ${rep}`);
    }
}