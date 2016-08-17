import React from 'react';

const IsSecretCheckbox = ({ isSecret, changeIsSecret }) => (
  <div className="is-secret-checkbox">
    <label>Secret?
      <input type="checkbox"
        checked={isSecret} 
        onChange={(e) => changeIsSecret(e.target.checked)}/>
    </label>
  </div>
);

export default IsSecretCheckbox;