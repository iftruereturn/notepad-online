import React from 'react';
import Loader from './Loader.jsx';

class AuthPanel extends React.Component {

  componentDidMount() {
    document.title = 'Notepad Online - Auth';
    if (this.registerButton) {
      this.registerButton.disabled = 'true';
    }
  }

  componentDidUpdate() {
    if (this.registerButton) {
      this.registerButton.disabled = 'true';
    }
  }

  registerCheck() {
    if (this.passwordSignUp.value !== this.repeatedPasswordSignUp.value
        || this.passwordSignUp.value.length < 1
        || this.usernameSignUp.value.length === 0) {
      this.registerButton.disabled = 'true';
      return false;
    }

    this.registerButton.disabled = '';
    return true;
  }

  checkEnterKeyPressedLogin(e) {
    if (e.key === 'Enter') {
      this.props.logIn(this.usernameLogIn.value, this.passwordLogIn.value);
    }
  }

  checkEnterKeyPressedSignup(e) {
    if (e.key === 'Enter') {
      if (this.registerCheck()) {
        this.props.signUp(this.usernameSignUp.value, this.passwordSignUp.value);
      }
    }
  }

  render() {
    const { username,
      logInRequested, signUpRequested, logOutRequested, loggedIn, checkIfLoggedInRequested,
      signUp, logIn,
      errorMessage } = this.props;

    const signUpMarkup = (
      <div>
        { signUpRequested ? <Loader text="signing up" /> :
        <div>
          <h2>Sign up</h2>
          <label className="auth-container-label" htmlFor="signup-username">
            Username:
          </label>
          <input
            id="signup-username"
            type="text"
            ref={node => { this.usernameSignUp = node; }}
            onChange={() => { this.registerCheck(); }}
            onKeyPress={(e) => { this.checkEnterKeyPressedSignup(e); }}
          />
          <label className="auth-container-label" htmlFor="signup-password">
            Password:
          </label>
          <input
            id="signup-password"
            type="password"
            ref={node => { this.passwordSignUp = node; }}
            onChange={() => { this.registerCheck(); }}
            onKeyPress={(e) => { this.checkEnterKeyPressedSignup(e); }}
          />
          <label className="auth-container-label" htmlFor="signup-repeat-password">
            Repeat password:
          </label>
          <input
            id="signup-repeat-password"
            type="password"
            ref={node => { this.repeatedPasswordSignUp = node; }}
            onChange={() => { this.registerCheck(); }}
            onKeyPress={(e) => { this.checkEnterKeyPressedSignup(e); }}
          />
          <button
            className="add"
            ref={node => { this.registerButton = node; }}
            onClick={() => { signUp(this.usernameSignUp.value, this.passwordSignUp.value); }}
          >
            <i className="fa fa-user-plus" />&nbsp;Sign Up
          </button>
          { errorMessage === 'Signup error' ?
            <span className="auth-container-error">{errorMessage}</span> :
          '' }
        </div>
        }
      </div>
    );

    const logInMarkup = (
      <div>
        { logInRequested || checkIfLoggedInRequested ? <Loader text="logging in" /> :
        <div>
          <h2>Log In</h2>
          <label className="auth-container-label" htmlFor="login-username">
            Username:
          </label>
          <input
            id="login-username"
            type="text"
            ref={node => { this.usernameLogIn = node; }}
            onKeyPress={(e) => { this.checkEnterKeyPressedLogin(e); }}
          />
          <label className="auth-container-label" htmlFor="login-password">
            Password:
          </label>
          <input
            id="login-password"
            type="password"
            ref={node => { this.passwordLogIn = node; }}
            onKeyPress={(e) => { this.checkEnterKeyPressedLogin(e); }}
          />
          <button
            className="save"
            onClick={() => { logIn(this.usernameLogIn.value, this.passwordLogIn.value); }}
          >
            <i className="fa fa-sign-in" />&nbsp;Log In
          </button>
          { errorMessage === 'Login error' ?
            <span className="auth-container-error">{errorMessage}</span> :
          '' }
        </div>
        }
      </div>
    );

    const logOutMarkup = (
      <div>
        { logOutRequested ? <Loader text="logging out" /> :
        <div>
          Already logged in as { username }
        </div>
        }
      </div>
      );

    const unloggedMarkup = (
      <div className="auth-unlogged-markup">
        { signUpRequested ? null : logInMarkup }
        { logInRequested || checkIfLoggedInRequested ? null : signUpMarkup }
      </div>
      );

    return (
      <div className="auth-container">
        { loggedIn ?
          logOutMarkup :
          unloggedMarkup }
      </div>
    );
  }
}

AuthPanel.propTypes = {
  username: React.PropTypes.string.isRequired,
  logInRequested: React.PropTypes.bool.isRequired,
  signUpRequested: React.PropTypes.bool.isRequired,
  logOutRequested: React.PropTypes.bool.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  checkIfLoggedInRequested: React.PropTypes.bool.isRequired,
  signUp: React.PropTypes.func.isRequired,
  logIn: React.PropTypes.func.isRequired,
  errorMessage: React.PropTypes.string.isRequired,
};

export default AuthPanel;
