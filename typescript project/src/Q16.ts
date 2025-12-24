function simpleInterest(principal: number, rate: number, time: number): number {
  return (principal * rate * time) / 100;
}

const amountEarned = simpleInterest(1000, 5, 2);
console.log(amountEarned);
