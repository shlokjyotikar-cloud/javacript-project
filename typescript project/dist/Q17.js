"use strict";
function compoundInterest(principal, rate, time, n) {
    const amount = principal * Math.pow(1 + rate / (n * 100), n * time);
    return amount - principal;
}
const amountGained = compoundInterest(1000, 5, 2, 4);
console.log(amountGained.toFixed(2));
