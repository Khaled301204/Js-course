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