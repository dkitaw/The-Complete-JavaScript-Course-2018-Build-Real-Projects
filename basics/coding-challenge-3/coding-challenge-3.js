var bills = [124, 48, 268];

function tipCalculator(bill) {
    var percent;
    if (bill < 50) {
        percent = .20;
    } else if (bill >= 50 && bill < 200) {
        percent = .15;
    } else {
        percent = .10;
    }
    return bill * percent;
}

var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(tips);
console.log(finalValues);