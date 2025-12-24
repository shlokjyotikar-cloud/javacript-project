"use strict";
function calculateEMI(principal, annualRate, months) {
    const monthlyRate = annualRate / (12 * 100);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    return emi;
}
const monthlyPayment = calculateEMI(500000, 7.5, 60);
console.log(monthlyPayment.toFixed(2));
