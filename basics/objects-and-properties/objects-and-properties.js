var john = {
    firstName: 'John',
    lastName: 'Smith',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

// Accessing Properties in Object
console.log(john);
console.log(john.firstName);
console.log(john.isMarried);
console.log(john.family[2]);
console.log(john['job']);

// Mutate Properties in Object
john.firstName = 'Mark';
john['lastName'] = 'Miller';

console.log(john);
// Creating a Property inside Object
john.age = 33;
console.log(john);

var jane = new Object();

jane.firstName = 'Jane';
jane.lastName = 'Khatri';
jane.family = ['Robin', 'Raja'];
jane.job = 'Software Enginner';
jane.isMarried = true;

console.log(jane);