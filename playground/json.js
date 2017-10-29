const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

var originalNotesString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNotesString);
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log('typeof note: ', typeof note);
console.log('note.title: ', note.title);