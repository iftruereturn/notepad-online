import React from 'react';

const IsSecretCheckbox = ({ isSecret, changeIsSecret }) => (
  <div className="is-secret-checkbox">
    <input
      id="is-secret-checkbox-input"
      type="checkbox"
      checked={isSecret}
      onChange={(e) => changeIsSecret(e.target.checked)}
    />
    <label htmlFor="is-secret-checkbox-input">
      Is this note secret?
    </label>
  </div>
);

IsSecretCheckbox.propTypes = {
  isSecret: React.PropTypes.bool.isRequired,
  changeIsSecret: React.PropTypes.func.isRequired,
};

export default IsSecretCheckbox;
