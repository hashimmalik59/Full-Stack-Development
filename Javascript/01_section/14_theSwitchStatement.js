// Switch Statement

const myWorkoutSchedule = "sat";
switch (myWorkoutSchedule) { // switch statements we use then, we have a short multiple conditions
    case "mon": // checks if the switch value matches this value:
        console.log(`Back`);
    // break; // stops/terminate/exits the code
    case "tue":
        console.log(`Shoulder`);
        break;
    case "wed":
        console.log(`Bicep`);
        break;
    case "thur":
        console.log(`Tricep`);
        break;
    case "fri":
        console.log(`Chest`);
        break;
    case "sat":
        console.log(`Legs`);
        break;
    case "sun":
        console.log("Rest");
        break;
    default: // Runs if no case matches(like else condition)
        console.log(`Invalid day!`);
}
// Note:
// Why is break important?
// Without break, JavaScript will continue executing the next cases even if the match is already found, which often leads to unexpected results.

if (day === "mon") {
    console.log(`Back`);
} else if (day === "tue") {
    console.log(`Shoulder`);
} else if (day === "wed") {
    console.log(`Bicep`);
} else if (day === "thur") {
    console.log(`Tricep`);
} else if (day === "fri") {
    console.log(`Chest`);
} else if (day === "sat") {
    console.log(`Legs`);
} else if (day === "sun") {
    console.log(`Rest`);
} else {
    console.log(`Invalid day`);
}