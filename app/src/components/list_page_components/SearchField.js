import React from 'react';

const SearchField = ({ searchInput, findNotes, searching, addNewNote }) => (
  <div>
    <input type="text" ref={(ref) => searchInput = ref} 
            onChange={(e) => findNotes(e.target.value)}/>
    <span>{searching? 'searching' : ''}</span>
    <button onClick={() => addNewNote()}>Add new note</button>
  </div>
);

export default SearchField;