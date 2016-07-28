import React from 'react';

const NoteTextInput = ({ value, changeValue }) => (
  <div>
    <textarea name="" id="" cols="30" rows="10"
      value={value} onChange={(e) => changeValue(e.target.value)}></textarea>
  </div>
);



export default NoteTextInput;