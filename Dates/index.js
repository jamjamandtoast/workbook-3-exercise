"use strict"
console.log("index.js");
const dateHere = document.getElementById("dateHere");
const dateLabel = document.getElementById("dateLabel");
const dateOutput = document.getElementById("dateOutput");
const convertBtn = document.getElementById("convertBtn");

window.onload = init;

function init() {
    convertBtn.onclick = onconvertBtnClicked;
}
function onconvertBtnClicked(){
    const dateString = dateHere.value   
/*     dateOutput.innerHTML = dateString  */
    // convert string to a date and display it
    let d = new Date(dateString);
    dateOutput.innerHTML = d.toString();
    dateOutput.innerHTML
}
