import React from 'react';

const NoteTextarea = ({ value, changeValue }) => (
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    className="note-page-textarea"
    placeholder="Write something..."
    value={value} onChange={(e) => { changeValue(e.target.value); }}
  />
);

NoteTextarea.propTypes = {
  value: React.PropTypes.string.isRequired,
  changeValue: React.PropTypes.func.isRequired,
};

export default NoteTextarea;
