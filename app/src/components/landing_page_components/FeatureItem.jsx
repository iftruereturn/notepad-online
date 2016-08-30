import React from 'react';

const FeatureItem = ({ children }) => (
  <div className="feature-item">
    {children}
  </div>
);

FeatureItem.propTypes = {
  children: React.PropTypes.node,
};

export default FeatureItem;
