// console.log(this);  // Points to window object

// function sayHello() {
//     console.log(this);  // Points to window object
// }

// sayHello();

var john = {
    name: 'John',
    yearOfBirth: 1985, 
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
        console.log(this);  // Points to John Object

        // function sayHi() {
        //     console.log(this);
        // }
        // sayHi();    // Points to Window Object
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1983
}

mike.calculateAge = john.calculateAge;  // Method Borrowing
mike.calculateAge();