"use strict";
function rupeesToDollars(rupees, exchangeRate) {
    return rupees / exchangeRate;
}
const convertedAmount = rupeesToDollars(5000, 83);
console.log(convertedAmount.toFixed(2));
