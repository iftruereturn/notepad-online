import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as AuthActions from '../actions/AuthActions';
import AuthPanel from '../components/AuthPanel.jsx';

const Auth = (props) => (
  <AuthPanel {...props} />
);

const mapStateToProps = (state) => (
  { ...state.auth }
);

// const mapDispatchToProps = (dispatch) => {
// }

export default withRouter(connect(mapStateToProps, AuthActions)(Auth));
