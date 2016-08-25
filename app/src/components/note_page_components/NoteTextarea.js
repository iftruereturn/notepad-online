import React from 'react';

const NoteTextarea = ({ value, changeValue }) => (
  <textarea className="note-page-textarea" name="" id="" cols="30" rows="10"
    className="note-page-textarea"
    placeholder="Write something..."
    value={value} onChange={(e) => changeValue(e.target.value)}></textarea>
);



export default NoteTextarea;