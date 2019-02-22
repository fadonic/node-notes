console.log("Starting util.js");

const fs = require("fs");

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync("notes-data.json");
            return  JSON.parse(notesString); 
        }catch(e){
            return [];
        }
};

var saveNotes = (notes)=>{
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNotes = (title, body) =>{
   var notes = fetchNotes();
   var note = {
       title,
       body
   };
   var duplicateNotes = notes.filter(function(note){
       return note.title === title;
   })

   if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
   };
};

var getAll = () =>{
    var notes = fetchNotes();
    return notes;
}

var getNote = (title)=>{
  
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title == title);
    return filteredNotes[0];
}

var removeNote = (title) => {
    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length ;
}

module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote
}
