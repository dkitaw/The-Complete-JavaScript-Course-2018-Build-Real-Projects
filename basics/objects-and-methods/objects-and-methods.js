var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1985,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function () {
        this.age =  2018 - this.birthYear;
    }
}

john.calculateAge();
console.log(john);