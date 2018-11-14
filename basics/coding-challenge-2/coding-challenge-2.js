var averageJohn = (89 + 120 + 103) / 3;
var averageMark = (116 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;

// console.log(averageJohn);
// console.log(averageMark);
// console.log(averageMary);

if (averageJohn > averageMark && averageJohn > averageMark) {
    console.log(`John's team win the game with average of: ${averageJohn} points.`);
} else if (averageMark > averageJohn && averageMark > averageMary) {
    console.log(`Mark's team win the game with average of: ${averageMark} points.`);
} else if (averageMary > averageJohn && averageMary > averageMark) {
    console.log(`Mary's team win the game with average of: ${averageMary} points.`);
} else {
    console.log(`There is a draw.`);
}
