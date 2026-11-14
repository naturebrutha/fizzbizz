"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";


let command = prompt(menuString);

while (command !== null && command.toLowerCase().trim() !== "exit") {
    command = command.toLowerCase().trim();

    if (command === "list") {
        let contactList = "";

        for (let contact of contacts) {
            contactList += contact.split("|").join(" | ") + "\n";
        }

        alert(contactList);

    } else if (command.startsWith("get ")) {
        let number = command.substring(4).trim();
        let found = false;

        for (let contact of contacts) {
            let info = contact.split("|");

            if (info[0] === number) {
                alert("Name: " + info[1] +
                      "\nEmail: " + info[2] +
                      "\nPhone: " + info[3]);
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Contact not found.");
        }

    } else {
        alert("Invalid command.");
    }

    command = prompt(menuString);
}

alert("Program ended.");
