"use strict"
function newLocation() {
    let message =  "Our corporate offices are located in Dallas";
    let newMessage = message.replace(/dallas/i,"Austin") 
    console.log(newMessage);
}
newLocation()
