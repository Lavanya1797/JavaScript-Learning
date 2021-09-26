/*
let country = "India";
console.log(country);
let continent = "Asia";
console.log(continent);
let population = 300000;
console.log(population);

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI < johnBMI;
console.log(markHigherBMI);
console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher then John's ${johnBMI}`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}


const inputYear = 1991;
console.log(inputYear + 10);
console.log(2 * 2);


const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage) {
    console.log('Dolphins win');
} else if (dolphinsAverage < koalasAverage) {
    console.log('Koalas wins');
} else {
    console.log('Match draw');
}

const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('Dolphins win');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log('Koalas wins');
} else {
    console.log('Match draw');
}

const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage) {
    console.log('Dolphins win');
} else if (dolphinsAverage < koalasAverage) {
    console.log('Koalas wins');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log('Match draw');
} else {
    console.log('no one win');
}

const day = 'Friday';
if (day==='Monday')
{
    console.log('Today is weekday');
}
else if (day==='Tuesday' || day==='Wednesday')
{
    console.log('Go to gym');
}
else
{
    console.log('rest day 🌝');
}
*/
const bill = 275;
const tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2 ;
console.log(`The tip is ${tip}`);
console.log(`The bill was ${bill} , The tip was ${tip} , The total $(bill + tip)`);


