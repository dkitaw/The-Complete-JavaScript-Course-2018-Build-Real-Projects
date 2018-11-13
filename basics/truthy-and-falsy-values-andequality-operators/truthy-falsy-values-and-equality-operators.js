// Falsy values -> undefined, null, 0, '', NaN

// Truthy values -> NOT Falsy values

var height;
// height = 23;
height = 0;

if (height || height === 0) {
    console.log(`Variable is defined.`);
} else {
    console.log(`Variable is NOT defined`);
}