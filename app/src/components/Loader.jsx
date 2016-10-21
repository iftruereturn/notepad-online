import React from 'react';

const Loader = ({ text }) => (
  <div className="loader">
    <div className="loader-container">
      <i className="fa fa-spinner fa-spin fa-lg" />
    </div>
    <div className="loader-text">
      {text}
    </div>
  </div>
);

Loader.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Loader;
