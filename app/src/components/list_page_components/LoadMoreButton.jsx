import React from 'react';

const LoadMoreButton = ({ loadMoreNotes, loadingMoreNotes }) => (
  <div className="load-more-button-container">
    <button
      onClick={() => loadMoreNotes()}
      disabled={loadingMoreNotes}
      className="add load-more-button"
    >
      { loadingMoreNotes ?
        <div>
          <i className="fa fa-refresh fa-spin fa-lg" />&nbsp;Load More
        </div> :
        <div>
          <i className="fa fa-refresh fa-lg" />&nbsp;Load More
        </div>
      }
    </button>
  </div>
);


LoadMoreButton.propTypes = {
  loadMoreNotes: React.PropTypes.func.isRequired,
  loadingMoreNotes: React.PropTypes.bool.isRequired,
};

export default LoadMoreButton;
