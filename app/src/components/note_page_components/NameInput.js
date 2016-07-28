import React from 'react';

const NameInput = ({ name, changeName }) => (
  <div>
    <input type="text" value={name} onChange={(e) => changeName(e.target.value)}/>
  </div>
);

export default NameInput;