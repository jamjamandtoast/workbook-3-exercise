
// functions here 

function displayMailingLabel (name, address, city, state, zip){
    //let shippingAddress = (name, address, city, state, zip)
    let shippingAddress = name + " " + address + " " + city + " " + state + " " + zip + " ";
    //let shippingAddress = `${name} ${address} ${city}`;
console.log("Your shipping Address is: " + shippingAddress);
};

function addNumbers(num1, num2) {
 
    let someNumber = num1 + num2; 

    console.log(someNumber);
    
}

function displayReceipt(totalDue, amountpaid){}

//display output here 


displayMailingLabel("Jamys", "190 Coconut drive", "West Palm beach", "Florida", "33401"); 

displaysomeNumber(10 , 20);