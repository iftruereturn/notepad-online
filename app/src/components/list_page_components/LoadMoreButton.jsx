import React from 'react';

const LoadMoreButton = ({ loadMoreNotes }) => (
  <div>
    <button onClick={() => loadMoreNotes()}>Load More</button>
  </div>
);

LoadMoreButton.propTypes = {
  loadMoreNotes: React.PropTypes.func.isRequired,
};

export default LoadMoreButton;
