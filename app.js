console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash')

const notes = require('./notes.js');

var command = process.argv[2]

console.log('Command: ', command)
console.log(process.argv)

if (command == 'add') {
    console.log('adding note')
}
else if (command == 'list') {
    console.log('listing notes')
}
else if (command == 'read') {
    console.log('reading note')
}
else if (command == 'remove') {
    console.log('removing note')
}
else {
    console.log('no command')
}