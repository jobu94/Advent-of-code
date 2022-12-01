"use strict";
import data from "./input.js";

//PART ONE
let elves = data.replace(/[' '_\n]/g, ",").split(",,");
let sum = 0;
let elvesCalories = [];

for (let i = 0; i < elves.length; i++) {
  elves[i] = elves[i].split(",").map(Number);
  for (const elvesTotal of elves[i]) {
    sum += elvesTotal;
    elvesCalories[i] = sum;
  }
  sum = 0;
}

//Part Two
const total = elvesCalories.sort((a, b) => a - b).slice(-3);
for (const arr of total) {
  sum += arr;
}
console.log(sum);
