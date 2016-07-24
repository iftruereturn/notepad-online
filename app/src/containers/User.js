import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as UserActions from '../actions/UserActions';
import UserPanel from '../components/UserPanel';

class User extends React.Component {

  render() {
    return (
      <div>
        <UserPanel {...this.props}></UserPanel>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.user
  }
};

// const mapDispatchToProps = (dispatch) => {
// }

User = withRouter(connect(mapStateToProps, UserActions)(User));

export default User;

