const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const options = {}
options['title'] = {describe: 'Title of note', demand: true, alias: 't'}
options['body'] = {describe: 'Body of note', demand: true, alias: 'b'}

var commandOptions = function(options_array) {
    optionsObject = {}
    options_array.forEach((name) => optionsObject[name] = options[name])
    return optionsObject
}

const argv = yargs
    .command('add', 'Add a new note', commandOptions(['title', 'body']))
    .command('list', 'List all notes')
    .command('read', 'Read a note', commandOptions(['title']))
    .command('remove', 'Remove a note', commandOptions(['title']))
    .help()
    .argv;
var command = argv._[0];

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    notes.logNote(note, 'note added');
}
else if (command == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((notes => notes.logNotes(notes)));
}
else if (command == 'read') {
    var note = notes.getNote(argv.title);
    notes.logNote(note, 'note found');
}
else if (command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note Removed' : 'Note not removed';
    console.log(message);
}
else {
    console.log('no command');
}