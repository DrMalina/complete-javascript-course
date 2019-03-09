/*
 var heightMark = 1.69;
 var weightMark = 78;

 var heightJohn = 1.95;
 var weightJohn = 92;

 var johnBMI = weightJohn /(heightJohn*heightJohn);
 var markBMI = weightMark / (heightMark*heightMark);

 var markBMI_Higher = markBMI > johnBMI;

 console.log(markBMI+" "+johnBMI+" "+"Is Mark's BMI higher than John's?  "+ markBMI_Higher);
*/

var name = 'Maciek';
var age = 22;

age >= 18 ? console.log(name + ' drinks beer.') : console.log(name + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(name + ' drinks ' + drink);

var job = 'instructor';

switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(name + ' teaches in school');
        break;
    
    case 'driver':
        console.log(name + ' drives around');
        break;

    case 'designer':
        console.log(name + ' designs in school');
        break;

    default:
        console.log(name + ' does something else');
}

var teamJohnScore;
var teamMikeScore;
var teamMaryScore;

var teamJohnAvg;
var teamMikeAvg;
var teamMaryAvg;

teamJohnScore = 89 + 120 + 103;
//teamJohnScore = 116 + 94 + 123;
teamMikeScore = 116 + 94 + 123;
teamMaryScore = 97 + 134 + 105;


teamJohnAvg = teamJohnScore / 3;
teamMikeAvg = teamMikeScore / 3;
teamMaryAvg = teamMaryScore / 3;

switch(true) {
    case teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg:
        console.log("John's team wins (John: " + teamJohnAvg + " Mike: " + teamMikeAvg + " Mary: " + teamMaryAvg + ")");
        break;
    
    case teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg:
        console.log("Mike's team wins (John: " + teamJohnAvg + " Mike: " + teamMikeAvg + " Mary: " + teamMaryAvg + ")");
        break;

    case teamMaryAvg > teamMikeAvg && teamMaryAvg > teamJohnAvg:
        console.log("Mary's team wins (John: " + teamJohnAvg + " Mike: " + teamMikeAvg + " Mary: " + teamMaryAvg + ")");
        break; 

    default:
        console.log("Draw! (John: " + teamJohnAvg + " Mike: " + teamMikeAvg + " Mary: " + teamMaryAvg + ")");

}

var bills = [];
var tips = [];

function calculateTips(price) {
    var tip;
    var total;

    if(price < 50) {
        tip = price * 0.2;
        total = price + tip;

        tips.push(tip);
        bills.push(total);
    } else if (price >= 50 && price <=200) {
        tip = price * 0.15;
        total = price + tip;

        tips.push(tip);
        bills.push(total);
    } else {
        tip = price * 0.1;
        total = price + tip;

        tips.push(tip);
        bills.push(total);
    }

}

calculateTips(124);
calculateTips(48);
calculateTips(268);

console.log(tips, bills);

var john = {
    firstName: 'Maciej',
    surname: 'Mal',
    birthYear: 1997,
    family: ['Jan', 'Kasia', 'Ania'],
    job: 'worker',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
}


john.calcAge();
console.log(john);
//console.log(john.family);

var mark = {
    name: 'Mark',
    mass: 92,
    height: 1.8,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

var john = {
    name: 'John',
    mass: 78,
    height: 1.77,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

function highestBMI (mark, john) {
    if (mark.calcBMI() > john.calcBMI()) {
        console.log(mark.name + ' has higher BMI of ' + mark.bmi);
    } else if (john.calcBMI() > mark.calcBMI()) {
        console.log(john.name + ' has higher BMI of ' + john.bmi);
    } else {
        console.log('They have same BMI of ' + mark.bmi);
    }
}

highestBMI(mark, john);

// Loops
var jack = ['Jack', 'Shephard', 1981, 'doctor', false];

for (var i=0; i < jack.length; i++) {
    console.log(jack[i]);
}

var i = 0;
while (i < jack.length) {
    console.log(jack[i]);
    i++
}

///
console.log('---------------------------------------');

for (var i=0; i < jack.length; i++) {
    if (typeof jack[i] !== 'string') continue; 
        console.log(jack[i]);
}

for (var i=0; i < jack.length; i++) {
    if (typeof jack[i] !== 'string') break; 
        console.log(jack[i]);
}

console.log('//////////////////// Challange //////////////////////////');

for (var i=jack.length - 1; i >= 0; i--) {
        console.log(jack[i]);
}

console.log('------------------- Coding Challange 5-----------------');

var costsJohn = {
    bills: [124, 48, 268, 180, 42],
    calcCosts: function() {
        this.tips = [];
        this.total = [];

        for (var i=0; i<this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {
                percentage = .2;

            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;

            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.total[i] = bill + bill * percentage;
        }
    }
}

var costsMark = {
    bills: [77, 375, 110, 45],
    calcCosts: function() {
        this.tips = [];
        this.total = [];

        for (var i=0; i<this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if(bill < 100) {
                percentage = .2;

            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;

            } else {
               percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.total[i] = bill + bill * percentage;
        }

    }
}

function calcAvgTip (arr) {
    var sum = 0;

    for (var i=0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    return sum / arr.length;
}

costsJohn.calcCosts();
costsMark.calcCosts();

costsJohn.average = calcAvgTip(costsJohn.tips);
costsMark.average = calcAvgTip(costsMark.tips);
console.log(costsJohn);

if (costsJohn.average > costsMark.average) {
    console.log("John's family paid higher tips on average of " + costsJohn.average);
} else if (costsMark.average > costsJohn.average) {
    console.log("Mark's family paid higher tips on average of " + costsMark.average);
} else {
    console.log('Both families paid similar tips on average');
}















 







