"use strict";

function getSupplier(code) {
 let supplier;

 //do the work...

 supplier = "some value to be replaced later";

 return supplier;
    
}


let code1 = "ACME:123-L";
let code2 = "DI:12345-M";
let code3 = "ACE:1-12";


let code1Supplier = getSupplier(code1);

console.log(`Code1 (full)    : ${code1}`);
console.log(`Code 1 supplier : ${code1Supplier}`);
