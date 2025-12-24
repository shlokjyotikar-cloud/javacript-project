function rupeesToDollars(rupees: number, exchangeRate: number): number {
  return rupees / exchangeRate;
}

const convertedAmount = rupeesToDollars(5000, 83);
console.log(convertedAmount.toFixed(2));
