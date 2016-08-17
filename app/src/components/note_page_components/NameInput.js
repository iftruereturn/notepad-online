import React from 'react';

const NameInput = ({ name, changeName }) => (
  <input type="text" 
    placeholder="Input name here"
    value={name} 
    onChange={(e) => changeName(e.target.value)}/>
);

export default NameInput;