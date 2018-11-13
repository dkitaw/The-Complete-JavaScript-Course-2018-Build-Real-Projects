var firstName = 'John';
var age = 22;
var job = 'teacher';

age >= 18 ? console.log(`${firstName} drinks beer.`) : console.log(`${firstName} drinks juice.`);

// Assign values to variables using ternary operator
var drink = age >= 18 ? 'beer' : 'beer';
console.log(drink);

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(`${firstName} teaches kids how to code.`);
    break;

    case 'designer':
        console.log(`${firstName} designes beautiful websites.`);
    break;

    case 'driver':
        console.log(`${firstName} drives an Uber in Lisbon.`);
    break;

    default:
        console.log(`${firstName} does something else.`);
    break;
}

switch (true) {
    case age < 13:
        console.log(`${firstName} is a boy.`);
    break;

    case age >= 13 && age < 20:
        console.log(`${firstName} is a teenager.`);
    break;

    case age >= 20 && age < 30:
        console.log(`${firstName} is a young man.`);
    break;

    default:
        console.log(`${firstName} is a man.`);
    break;
}