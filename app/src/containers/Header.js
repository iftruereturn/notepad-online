import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { checkIfLoggedIn, logOut } from '../actions/AuthActions';
import { browserHistory } from 'react-router';

class Header extends React.Component {

  gotoAuthAndLogOut() {
    const { logOut } = this.props;
    browserHistory.push('auth');
    logOut();
  }

  componentDidMount() {
    const { checkIfLoggedIn } = this.props;
    checkIfLoggedIn();
  }
  
  render() {
    const { checkIfLoggedInRequested, loggedIn, username,
      checkIfLoggedIn, logOut } = this.props;


    const logInMarkup = (
      <button className="add" 
        onClick={() => {browserHistory.push('auth')}}>
        Log In | Sign Up
      </button>
    );

    const logOutMarkup = (
      <div>
        { username }
        <button onClick={() => {this.gotoAuthAndLogOut()}}>Log Out</button>
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
  checkIfLoggedInRequested: state.auth.checkIfLoggedInRequested,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, ({ checkIfLoggedIn, logOut }))(Header);
