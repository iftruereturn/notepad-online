
export const fetchNoteById = (noteId) => {
  let noteJSON;

  fetch('/api/notes/' + noteId)
    .then((response) => {
      noteJSON = response.json();
    })
    .catch(() => {
      console.log('Error in fetching note by id');
    });

  return noteJSON;
};