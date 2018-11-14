var john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    }

}

var mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBMI: function () {
       return this.bmi = this.mass / (this.height * this.height);
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john);
console.log(mark);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} has a higher BMI: ${john.bmi}`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} has a higher BMI: ${mark.bmi}`);
} else {
    console.log(`${john.fullName} and ${mark.fullName} both have same BMIs`);
}