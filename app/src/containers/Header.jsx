import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { checkIfLoggedIn, logOut } from '../actions/AuthActions';

class Header extends React.Component {

  componentDidMount() {
    const { checkLogIn } = this.props;
    checkLogIn();
  }

  gotoAuthAndLogOut() {
    const { logOutNow } = this.props;
    browserHistory.push('auth');
    logOutNow();
  }

  render() {
    const { loggedIn, username } = this.props;

    const logInMarkup = (
      <button
        className="add"
        onClick={() => { browserHistory.push('auth'); }}
      >
        <i className="fa fa-sign-in" />&nbsp;Log In |
        &nbsp;<i className="fa fa-user-plus" />&nbsp;Sign Up
      </button>
    );

    const logOutMarkup = (
      <div>
        <i className="fa fa-user" />
        &nbsp;{ username }
        <button onClick={() => { this.gotoAuthAndLogOut(); }}>
          <i className="fa fa-sign-out" />
          &nbsp;Log Out
        </button>
      </div>
    );

    return (
      <div className="header-container">
        {
          loggedIn ?
          logOutMarkup :
          logInMarkup
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  loggedIn: state.auth.loggedIn,
});

Header.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  username: React.PropTypes.string.isRequired,
  checkLogIn: React.PropTypes.func.isRequired,
  logOutNow: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps,
  ({ checkLogIn: checkIfLoggedIn, logOutNow: logOut }))(Header);
