var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

console.log(names.length);

names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
console.log(john);

john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));