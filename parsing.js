"use strict"

/* let name = "Brenda Kaye";

function indexOf() {
    let first = name.slice(0,6);
    let last = name.slice(7,10);
 console.log("first name: " + first + " Last name: " + last);
}
indexOf() */

function parseAndDisplayName(fullName) {
    let names = fullName.split(" ");
    let firstNames = names[0];
    let lastName = names[names.length - 1];

    console.log("First name:" + firstNames);
    console.log("Last name:" + lastName);
    console.log("Full name:" + names);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


