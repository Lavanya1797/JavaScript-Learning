/*const calcAverage = (a,b,c) => (a+b+c)/3;
const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);
console.log(avgDolphins,avgKoalas);
const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins wins 🏆 (${avgDolphins} vs ${avgKoalas})`);
    }else if (avgKoalas>=2*avgDolphins){
        console.log(`Koalas wins 🏆 (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log(`No one wins`);
    }
}
checkWinner(avgDolphins,avgKoalas);

const calcTip = function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.02;
}
const bill = [125,555,44];
const tips = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
console.log(bill,tips);
const total = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];
console.log(bill,tips,total);
'I like to drink ${age>=18 ? 'wine' : 'water'}');     


const jonas = {
    firstName : 'jonas',
    birthYear : 1992,
    job : 'teacher',
    hasDriversLicense : true,
    calcAge:function(){
      this.age =  2021 - this.birthYear;
      return this.age;
    },
    getSummary : function(){
        return `${this.firstName} is ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense?'a':'no'} license`;
    }
};
console.log(jonas.getSummary());


const MarkMiller = {
    Name : 'MarkMiller',
    Mass : 100,
    Height : 0.69,
    higherBMI : true,
    calcBMI : function(){
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }
};

const JohnSmith = {
    Name : 'JohnSmith',
    Mass : 92,
    Height : 1.95,
    calcBMI : function(){
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }
};
const high = function() {
    return `${(MarkMiller.calcBMI() > JohnSmith.calcBMI()) ? `${MarkMiller.Name} (${MarkMiller.calcBMI()})` : `${JohnSmith.Name} (${JohnSmith.calcBMI()})`}  HAS got a higer BMI`;
};

console.log(MarkMiller.calcBMI(), JohnSmith.calcBMI());
console.log(high());


// for loop using years
const years = [1991,1992,1993,1994];
const ages = [];
for (let i=0; i<years.length; i++){
    console.log(`${2021-years[i]}`);
}
const jonas = ['jonas' , 2037-1992, 'teacher'];
const types = [];

for (let i=0; i<jonas.length; i++){          // i=0 bcz array calculated from 0 and length is 3

console.log ( jonas[i]);

types.push(typeof jonas[i]);              // it add types element to the end of array

}
//for loop using years
const years = [1991,1992,1993,1994];
const ages = [];
for (let i=0; i<years.length; i++){
    //console.log(`${2021-years[i]}`);
    ages.push(2021-years[i]);
}
console.log(ages);
const jonas = ['jonas' , 2037-1992, 'teacher'];
const types = [];

for (let i=0; i<jonas.length; i++){          // i=0 bcz array calculated from 0 and length is 3

console.log ( jonas[i]);

types.push(typeof jonas[i]);              // it add types element to the end of array

}
console.log(types);

for (let rep = 1 ; rep<=10; rep++){

    console.log(`Lifting weighs repetition ${rep}`);
    
}
// while loop for dice
let dice = (Math.trunc(Math.random()*6)) + 1;  // should declare dice first
while (dice !== 6){
    console.log(`you rolled ${dice}`);
    dice = (Math.trunc(Math.random()*6)) + 1; // should write this again here otherwise loop will not be ended
    if (dice==6) console.log(`you rolled ${dice}`);
}

// tip calculator using loops
const bill = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
const calcTip = function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.02;
};
for (let i=0; i<bill.length; i++){
    let tip = (calcTip(bill[i]));
    tips.push(tip);
    totals.push(tip+bill[i]);
}
console.log(bill,tips);
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  // eg:  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
  

  // recap

  let markMass = 78;
  let markHeight = 1.69;
  let markBMI = markMass/markHeight**2;
  let johnMass = 92;
  let johnHeight = 1.95;
  let johnBMI = johnMass/johnHeight**2;
  console.log(markBMI,johnBMI); 
  const markHigherBMI=markBMI>johnBMI;
  console.log(markHigherBMI);
  if(markHigherBMI){
      console.log(`Mark has higher BMI (${markBMI}) than john`);
    
  }
  else{
      console.log(`John has higher BMI (${johnBMI}) than Mark`);
  }


const calcAverage = (a,b,c) => (a+b+c)/3;
const dolphinsScore = calcAverage(96,108,89);
const koalasScore = calcAverage(88,91,10);
console.log(dolphinsScore,koalasScore);
if(dolphinsScore>koalasScore){
    console.log(`dolphins win 🏆 (${dolphinsScore} vs ${koalasScore})`);
}else if(dolphinsScore<koalasScore){
    console.log(`Koalas win 🏆 (${koalasScore} vs ${dolphinsScore})`);
}else{
    console.log(`Match draw`);
}

const calcAverage=(a,b,c)=>(a+b+c)/3;
const dolphinsAverage=calcAverage(97,112,101);
const koalasAverage=calcAverage(97,112,101);
console.log(dolphinsAverage,koalasAverage);
if(dolphinsAverage>koalasAverage && dolphinsAverage>=100){
    console.log(`dolphins win 🏆 (${dolphinsAverage} vs ${koalasAverage})`);
}
else if (koalasAverage>dolphinsAverage && koalasAverage>=100){
   console.log(`Koalas win 🏆 (${koalasAverage} vs ${dolphinsAverage})`);
}else if (dolphinsAverage==koalasAverage && dolphinsAverage>=100 && koalasAverage>=100){
    console.log(`Match drw`);
}else{
    console.log(`no one wins`);
}

const bill = [275,40,430];
const tips=[];
const totals = [];
const calcTip = function(bill){
    return bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
}
for(let i=0; i<bill.length; i++){
    const tip = (calcTip(bill[i]));
    tips.push(tip);
    totals.push(tip+bill[i]);
}
console.log(bill,tips,totals);
console.log(`The bill was ${bill}, tips was ${tips},total value is ${totals}`);

const calcAverage = (a,b,c)=>(a+b+c)/3;
const dolphinsAvg = calcAverage(44,23,71);
const koalasAvg = calcAverage(65,54,49);
console.log(dolphinsAvg,koalasAvg);
const checkWinner = function(dolphinsAvg,koalasAvg){
    if(dolphinsAvg>=2*koalasAvg){
        console.log(`dolphins win (${dolphinsAvg} vs ${koalasAvg})`);

    } else {
        console.log(`Kolas win (${koalasAvg} vs ${dolphinsAvg})`);
    }
    
}
checkWinner(dolphinsAvg,koalasAvg);

const bill = [125,555,44];
const tips=[];
const totals=[];
const calcTip=function(bill){
    return bill>=50 && bill>=300? bill*0.15 : bill*0.2;
}
for (let i=0; i<bill.length; i++){
    const tip = (calcTip(bill[i]));
    tips.push(tip);
    totals.push(tip+bill[i]);
}

    console.log(bill,tips,totals);


const mark = {
    fullName : 'Markmiller',
    mass : 78,
    height:1.69,
    calcBMI : function(){
        BMI = mark.mass/mark.height**2;
        return BMI;
    }
}
const john = {
    fullName : 'Johnsmith',
    mass : 92,
    height:1.95,
    calcBMI : function(){
        BMI = john.mass/john.height**2;
        return BMI;
    }
}
const high = function(){
return `${(mark.calcBMI()>john.calcBMI()) ? `${mark.fullName} BMI (${mark.calcBMI()}) is higher than john` : `${john.fullName} BMI (${john.calcBMI()}) is higher than Mark`} `;
}
console.log(mark.calcBMI(),john.calcBMI());
console.log(high());


const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips =[];
const totals=[];
const calcTip = function(bills){
    return bills>=50 && bills>=300? bills*0.15 : bills*0.2;
}
for ( let i=0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);
const calcAverage = function(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
    sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/