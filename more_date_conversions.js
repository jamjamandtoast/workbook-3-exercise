"use strict"
let myDate = new Date("03/25/2000");
let momDate = new Date("June, 10, 1775");
let dadDate = new Date("1975, 7, 05");

console.log(myDate.toLocaleDateString());
console.log(momDate.toLocaleString());
console.log(dadDate.toLocaleString());