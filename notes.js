const fs = require('fs')

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
		catch(e) {
		console.log('error: ', e);
		return [];
	}
};

var findNotes = (title, notes) => {
	var found_notes = notes.filter((note) => note.title === title);
	return found_notes
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	  };

	if (findNotes(title, notes).length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note
	}
	else {
		console.log('error, note already exists');
	}

}

var getAll = () => {
	return fetchNotes();
}

var getNote = (title) => {
  	var notes = fetchNotes();
  	var found_notes = findNotes(title, notes)
  	return found_notes && found_notes.length > 0 ? found_notes[0] : null
}

var removeNote = (title) => {
  	var original_notes_array = fetchNotes();
  	var new_notes_array = original_notes_array.filter((note) => note.title !== title)
	saveNotes(new_notes_array);
	return original_notes_array != new_notes_array
}

var logNote = (note, message) => {
	if (note) {
		console.log(message);
		console.log('---');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	}
	else {
		console.log('note not saved');
	}
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
