/*function getBMI(m , h){
    let BMI;
    BMI = m / h**2 ;
    return BMI;
}

const Mark_mass = 78;
const Mark_height = 1.69;

const John_mass = 92;
const John_height = 1.95;

const Mark_BMI = getBMI(Mark_mass, Mark_height);
const John_BMI = getBMI(John_mass, John_height);

Mark_BMI>John_BMI?console.log("Mark has higher BMI"):console.log("John has higher BMI");
*/



/*
total = [];
tips = [];
function CalcTip(bill){
    bill>50 && bill<300?tips.push(bill*0.15):tips.push(bill*0.20);
    bill>50 && bill<300?total.push(bill+(bill*0.15)):total.push(bill+(bill*0.20));
}

CalcTip(125);
CalcTip(555);
CalcTip(44);

console.log(tips);
console.log(total);
*/

/*
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
total = [];

function CalcTip(bills){
    bills>50 && bills<300?tips.push(bills*0.15):tips.push(bills*0.20);
    bills>50 && bills<300?total.push(bills+(bills*0.15)):total.push(bills+(bills*0.20));
}

for(let i = 0 ; i<bills.length ; i++){
    CalcTip(bills[i]);
}

console.log("bills : "+bills);
console.log("tips : "+tips);
console.log("total : "+total);
*/


arr = [10, 20, 30, 40, 50];
function calcAverage(arr){
    let total = 0;
    for(let i=0 ; i<arr.length ; i++){
        total+=arr[i];
    } 
    return total / arr.length;
}

console.log("average : "+calcAverage(arr));