function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement < 0) {
        console.log(`${firstName} already retired.`);
    } else {
        console.log(`${firstName} retires in ${retirement} years.`);
    }
}

yearsUntilRetirement(1985, 'Robin');
yearsUntilRetirement(1946, 'S.R. Khatri');
yearsUntilRetirement(1983, 'Lalit');