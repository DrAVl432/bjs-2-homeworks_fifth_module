"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
let x2;
let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let credit;
  let payment;
  let amountOfCredit;
   if (percent<0) {
    return false
  }
  percent = percent/100/12
credit=amount-contribution
payment=credit * (percent + (percent / (((1 + percent) ** countMonths) -1)))
amountOfCredit = payment * countMonths
return parseFloat (amountOfCredit.toFixed(2));
}