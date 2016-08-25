import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ListActions from '../actions/ListActions';
import ListPage from '../components/ListPage';

class ListView extends React.Component {

  render() {
    return (
        <ListPage {...this.props}></ListPage>
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

ListView = withRouter(connect(mapStateToProps, ListActions)(ListView));

export default ListView;

