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
function CalcTip(bill){
    bill>50 && bill<300?total.push(bill*=0.15):total.push(bill*=0.20);
}
CalcTip(25);
CalcTip(200);
CalcTip(400);
CalcTip(140);
CalcTip(850);
console.log(total);