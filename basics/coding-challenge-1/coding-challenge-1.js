var markHeight, johnHeight, markMass, johnMass, markBMI, johnBMI, result;

markHeight = 1.69;
markMass = 78;
johnHeight = 1.95;
johnMass = 92;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(markBMI);
// console.log(johnBMI);

result = markBMI > johnBMI;
console.log(`Is Mark's BMI higher than John's? ${result}`);