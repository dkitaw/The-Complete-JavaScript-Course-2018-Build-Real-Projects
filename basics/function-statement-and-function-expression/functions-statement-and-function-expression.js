// Function Expression
var sayHello = function (firstName) {
    console.log(`Hello ${firstName}!`);
}

sayHello('Robin');
sayHello('Lalit');

// Function Statement
function sayGoodBye(firstName) {
    console.log(`Good bye ${firstName}`);
}

sayGoodBye('Robin');
sayGoodBye('Lalit');

var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
        case 'instructor':
           return `${firstName} teaches kids how to code.`;

        case 'driver':
           return `${firstName} drives an Uber in Lisbon.`;

        case 'designer':
            return `${firstName} designes beautiful websites.`;
    
        default:
            return `${firstName} does something else.`;
    }
}

console.log(whatDoYouDo('teacher', 'Robin'));
console.log(whatDoYouDo('instructor', 'Lalit'));
console.log(whatDoYouDo('driver', 'Suresh'));
console.log(whatDoYouDo('designer', 'Rahul'));
console.log(whatDoYouDo('cop', 'Dinesh'));