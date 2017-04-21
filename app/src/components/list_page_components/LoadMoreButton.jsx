import React from 'react';

const LoadMoreButton = ({ loadMoreNotes, loadingMoreNotes }) => (
  <div className="load-more-button-container">
    { loadingMoreNotes ?
      <div
        className="add load-more-div"
      >
        <i className="fa fa-refresh fa-spin fa-lg" />
      </div> :
      <button
        onClick={() => loadMoreNotes()}
        className="add load-more"
      >
        <i className="fa fa-refresh fa-lg" />&nbsp;Load More
      </button>
    }

  </div>
);


LoadMoreButton.propTypes = {
  loadMoreNotes: React.PropTypes.func.isRequired,
  loadingMoreNotes: React.PropTypes.bool.isRequired,
};

export default LoadMoreButton;
