import React from 'react';

const SearchField = ({ searchInput, findNotes, addNewNote }) => (
  <div>
    <input type="text" ref={(ref) => searchInput = ref} 
            onChange={(e) => findNotes(e.target.value)}/>
    <button onClick={() => addNewNote()}>Add new note</button>
  </div>
);

export default SearchField;