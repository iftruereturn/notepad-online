import React from 'react';

const IsSecretCheckbox = ({ isSecret, changeIsSecret }) => (
  <div>
    <span>Is note secret: </span>
    <input type="checkbox" checked={isSecret} onChange={(e) => changeIsSecret(e.target.checked)}/>
  </div>
);

export default IsSecretCheckbox;