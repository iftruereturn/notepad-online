import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ListActions from '../actions/ListActions';
import ListPage from '../components/ListPage';

class ListView extends React.Component {

  render() {
    return (
      <div>
        <ListPage {...this.props}></ListPage>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.list,
  }
};

// const mapDispatchToProps = (dispatch) => {
// }

NoteView = withRouter(connect(mapStateToProps, ListActions)(ListView));

export default ListView;

