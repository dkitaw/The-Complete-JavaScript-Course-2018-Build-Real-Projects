// Hoisting with Functions

calculateAge(1985);

function calculateAge(year) {
    console.log(2018 - year);
}


// retirement(1985);

var retirement = function (year) {
    console.log(65 - (2018 - year));
}



// Hoisting with Variables

console.log(age);
var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);