"use strict";
let cost = 1000;
let discountRate = 10;
let reduction = (cost * discountRate) / 100;
let finalCost = cost - reduction;
console.log("Final Cost:", finalCost);
