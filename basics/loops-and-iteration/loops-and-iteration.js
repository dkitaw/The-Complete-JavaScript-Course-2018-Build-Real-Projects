// Printing numbers from 0 to 9
// For Loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// While Loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// Continue Statements
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}

// Break Statements
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}