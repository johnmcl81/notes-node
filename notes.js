console.log('String notes.js')

var addNote = (title, body) => {
  console.log('addNote', title, body);
}

var getAll = () => {
  console.log('getAll');
}

var getNote = (title) => {
  console.log('getNote', title);
}

var removeNote = (title) => {
  console.log('removeNote', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
