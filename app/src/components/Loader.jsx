import React from 'react';

const Loader = ({ text }) => (
  <div className="loader">
    <div className="loader-container">
      ...{text}...
    </div>
  </div>
);

Loader.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Loader;
