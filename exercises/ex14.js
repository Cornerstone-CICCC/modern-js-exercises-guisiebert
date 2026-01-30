/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  let changeLeft = cash - total
  let change = {}


  // twentyDollar bills
  if (changeLeft > 2000) {
    const bills = Math.floor(changeLeft / 2000)
    change.twentyDollar = bills
    changeLeft = changeLeft - (bills * 2000)
  }

  // tenDollar bills
  if (changeLeft > 1000) {
    const bills = Math.floor(changeLeft / 1000)
    change.tenDollar = bills
    changeLeft = changeLeft - (bills * 1000)
  }

  // fiveDollar bills
  if (changeLeft > 500) {
    const bills = Math.floor(changeLeft / 500)
    change.fiveDollar = bills
    changeLeft = changeLeft - (bills * 500)
  }

  // twoDollar bills
  if (changeLeft > 200) {
    const bills = Math.floor(changeLeft / 200)
    change.toonie = bills
    changeLeft = changeLeft - (bills * 200)
  }

  // oneDollar bills
  if (changeLeft > 100) {
    const bills = Math.floor(changeLeft / 100)
    change.loonie = bills
    changeLeft = changeLeft - (bills * 100)
  }

  // quarter
  if (changeLeft > 25) {
    const bills = Math.floor(changeLeft / 25)
    change.quarter = bills
    changeLeft = changeLeft - (bills * 25)
  }

  // dime
  if (changeLeft > 10) {
    const bills = Math.floor(changeLeft / 10)
    change.dime = bills
    changeLeft = changeLeft - (bills * 10)
  }

  // nickel
  if (changeLeft > 5) {
    const bills = Math.floor(changeLeft / 5)
    change.nickel = bills
    changeLeft = changeLeft - (bills * 5)
  }

  // penny
  if (changeLeft > 1) {
    const bills = Math.floor(changeLeft / 1)
    change.penny = bills
    changeLeft = changeLeft - (bills * 1)
  }

  return change

};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
