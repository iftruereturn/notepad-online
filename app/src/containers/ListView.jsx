import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ListActions from '../actions/ListActions';
import ListPage from '../components/ListPage.jsx';

const ListView = (props) => (
  <ListPage {...props} />
);

const mapStateToProps = (state) => (
  {
    ...state.list,
    loggedIn: state.auth.loggedIn,
  }
);

// const mapDispatchToProps = (dispatch) => {
// }

export default withRouter(connect(mapStateToProps, ListActions)(ListView));
