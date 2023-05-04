"use strict"

function convertctof(celsius) {
        let fahrenheit = (celsius * 9/5) + 32;
        //return the result
        return fahrenheit;
      }
      
      let temperature = 100;
      let convertedTemp = convertctof(temperature);  
      
      console.log("The temperature is " + convertedTemp + " degrees.");