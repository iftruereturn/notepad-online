
// export const fetchNoteById = (noteId) => {
//   return fetch('/api/notes/' + noteId)
//     .then( (response) => {
//       response.json().then( (data) => { return data });
//     })
//     .catch( () => {
//       console.log('Error in fetching note by id');
//       return null;
//     });
// };

// export const saveNoteById = (noteId, note) => {

//   return fetch('/api/notes' + noteId, {  
//       method: 'post',  
//       headers: {  
//         "Content-type": "application/json"  
//       },  
//       body: JSON.stringify(note) 
//     })
//       .then( (res) => { return true })
//       .catch( (res) => { return false });
// }