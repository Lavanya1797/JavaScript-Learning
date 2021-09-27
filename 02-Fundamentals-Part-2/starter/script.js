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
*/

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
    return `${(MarkMiller.calcBMI() > JohnSmith.calcBMI()) ? MarkMiller.Name  : JohnSmith.Name} HAS got a higer BMI`;
};

console.log(MarkMiller.calcBMI(), JohnSmith.calcBMI());
console.log(high());
