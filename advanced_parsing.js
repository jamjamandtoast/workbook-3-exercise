"use strict"

function parseAndDisplayName(fullName) {
    let names = fullName.split(" ");
    let firstNames = names[0];
    let lastName = names[names.length - 1];
    

    console.log("First name:" + firstNames);
    console.log("Last name:" + lastName);
    console.log("Full name:" + names);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda kaye");
parseAndDisplayName("Dana Lynn Wyatt");
