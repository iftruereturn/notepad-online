import React from 'react';

const SearchField = ({ searchInput, findNotes, addNewNote }) => (
  <div>
    <input type="text" ref={(ref) => searchInput = ref}/>
    <button onClick={() => findNotes(searchInput.value)}>Find notes</button>
    <button onClick={() => addNewNote()}>+</button>
  </div>
);

export default SearchField;