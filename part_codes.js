"use strict";
function getSupplier(code) {
    let supplier = code.split(":")[0];
    let applesTea = code.indexOf("0,-");
    let partCode = code.substring(supplier.length + 1, applesTea);
  
    // do the work...
  
    return supplier;
  }

  function getProductNumber(code) {
    let colonPos = code.indexOf(":");
    let dashPos = code.indexOf("-");
    let productNum = code.substring(colonPos + 1, dashPos);
    
    return productNum;
  }
  
  function getSize(code){
    let size = code.split("-")[1];
    let sizeHelp = ("0,-");
    let sizeCode = code.substring(size.length +1, sizeHelp);
    return size;

  }
  

  
  let code1 = "ACME:123-L the large (L) part 123 is supplied by ACME";


  let code1Supplier = getSupplier(code1);
  
  console.log(`Code1 (full)    : ${code1}`);
  console.log(`Code 1 supplier : ${code1Supplier}`);
  

  
let code1Products = getProductNumber(code1);
console.log("product number: " + code1Products);

 let code1Size = getSize(code1);
 console.log("product size: " + code1Size);

