"use scripts";
let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

let startMillis = Date.parse(startDate);
let endMillis = Date.parse(endDate);

let timeDiff = Math.abs(endMillis - startMillis);
let numDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 

console.log("Number of days between " + startDate + " and " + endDate + ": " + numDays + " days.");
