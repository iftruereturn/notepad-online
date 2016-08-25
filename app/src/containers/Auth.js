import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as AuthActions from '../actions/AuthActions';
import AuthPanel from '../components/AuthPanel';

class Auth extends React.Component {

  render() {
    return (
        <AuthPanel {...this.props}></AuthPanel>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
};

// const mapDispatchToProps = (dispatch) => {
// }

Auth = withRouter(connect(mapStateToProps, AuthActions)(Auth));

export default Auth;

