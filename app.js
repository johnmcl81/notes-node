console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log('Command: ', command);
console.log(process.argv);

if (command == 'add') {
    console.log('adding note');
    notes.addNote(argv.title, argv.body);
}
else if (command == 'list') {
    console.log('listing notes');
    notes.getAll();
}
else if (command == 'read') {
    console.log('reading note');
    notes.getNote(argv.title);
}
else if (command == 'remove') {
    console.log('removing note');
    notes.removeNote(argv.title);
}
else {
    console.log('no command');
}