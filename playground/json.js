const fs = require("fs");

var originalNotes = {
    title:"secrets",
    body : "This is my secrets"
};

var originalNotesString = JSON.stringify(originalNotes);

fs.writeFileSync("notes.json", originalNotesString);

// var noteString = fs.readFileSync("notes.json");

// console.log(JSON.parse(noteString));