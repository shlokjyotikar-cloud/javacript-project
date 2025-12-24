
let cost: number = 1000;

let discountRate: number = 10;

let reduction: number = (cost * discountRate) / 100;

let finalCost: number = cost - reduction;

console.log("Final Cost:", finalCost);