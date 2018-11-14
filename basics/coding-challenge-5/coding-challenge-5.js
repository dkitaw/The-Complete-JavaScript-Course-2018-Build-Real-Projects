var john = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .20;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .10;
            }

            this.tips[i] = percentage * bill;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    bills: [77, 475, 110, 45],
    calcTip: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .20;
            } else if (bill >= 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }

            this.tips[i] = percentage * bill;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function average(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTip();
mark.calcTip();

john.averageTip = average(john.tips);
mark.averageTip = average(mark.tips);

if (john.averageTip > mark.averageTip) {
    console.log(`John's family paid highest tip: ${john.averageTip}`);
} else if (mark.averageTip > john.averageTip) {
    console.log(`Mark's family paid highest tip: ${mark.averageTip}`);
} else {
    console.log(`Both family paid similar amount of tip.`);
}
