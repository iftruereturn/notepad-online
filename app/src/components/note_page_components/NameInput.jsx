import React from 'react';

const NameInput = ({ name, changeName }) => (
  <input
    className="note-page-input"
    type="text"
    placeholder="Input name here"
    value={name}
    onChange={(e) => { changeName(e.target.value); }}
  />
);

NameInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  changeName: React.PropTypes.func.isRequired,
};

export default NameInput;
