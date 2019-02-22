console.log("Starting App!");


const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const yargs = require("yargs");

var command = process.argv[2];
var argv = yargs.argv;

console.log("command: " + command);

console.log("prcess ", process.argv);
console.log("yargs ", argv);


if(command=="add"){
    var note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log("Note Created");
        console.log("---");
        console.log(`title: ${note.title}`);
        console.log(`body: ${note.body}`);
    }else{
        console.log("Note title taken");
    }

}
else if(command=="list"){
    var notesList = notes.getAll();
    if(notesList){
        console.log("My Notes List");
        notesList.forEach((note)=>{
        console.log("---");
        console.log(`title: ${note.title}`);
        console.log(`body: ${note.body}`);
        })
        
    }else{
        console.log("Notes not found");
    }
    
}
else if(command=="read"){

    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note  Found");
        console.log("---");
        console.log(`title: ${note.title}`);
        console.log(`body: ${note.body}`);
    }else{
        console.log("Note was not found");
    }
    debugger;

   
}
else if(command=="remove"){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note Was successfully Removed" : "Note was not found";
    console.log(message);

}
else{
    console.log("command not recognised");
}


