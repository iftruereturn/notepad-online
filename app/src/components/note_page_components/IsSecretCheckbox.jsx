import React from 'react';

const IsSecretCheckbox = ({ isSecret, changeIsSecret }) => (
  <div className="is-secret-checkbox">
    <label htmlFor="is-secret-checkbox-input">
      Secret?
    </label>
    <input
      id="is-secret-checkbox-input"
      type="checkbox"
      checked={isSecret}
      onChange={(e) => changeIsSecret(e.target.checked)}
    />
  </div>
);

IsSecretCheckbox.propTypes = {
  isSecret: React.PropTypes.bool.isRequired,
  changeIsSecret: React.PropTypes.func.isRequired,
};

export default IsSecretCheckbox;
