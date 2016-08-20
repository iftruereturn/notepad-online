import React from 'react';
import Loader from './Loader';

export default class AuthPanel extends React.Component {
  // componentDidMount() {
  //   this.registerCheck();
  // }

  registerCheck() {
    if (this.passwordSignUp.value !== this.repeatedPasswordSignUp.value 
        || this.passwordSignUp.value.length < 1
        || this.usernameSignUp.value.length === 0) {
      this.registerButton.disabled = 'true';
    } else {
      this.registerButton.disabled = '';
    }
  }

  render() {
    const { username,
      logInRequested, signUpRequested, logOutRequested, loggedIn,
      signUp, logIn, logOut } = this.props;

    const signUpMarkup = (
      <div>
        { signUpRequested ? <Loader text="signing up"/> :
        <div>
          <h2>Sign up</h2>
          Username: <input type="text" ref={node => { this.usernameSignUp = node }} 
            onChange={() => {this.registerCheck()}}/>
          Password: <input type="text" ref={node => { this.passwordSignUp = node }} 
            onChange={() => {this.registerCheck()}}/>
          Repeat password: <input type="text" ref={node => { this.repeatedPasswordSignUp = node }} 
            onChange={() => {this.registerCheck()}}/>
          <button className="add" ref={node => { this.registerButton = node }} 
            onClick={() => {signUp(this.usernameSignUp.value, this.passwordSignUp.value)}}>Sign Up</button>
        </div>
        }
      </div>
      );

    const logInMarkup = (
      <div>
        { logInRequested ? <Loader text="logging in"/> :
        <div>
          <h2>Log In</h2>
          Username: <input type="text" ref={node => { this.usernameLogIn = node }} />
          Password: <input type="text" ref={node => { this.passwordLogIn = node }} />
          <button className="save" onClick={() => {logIn(this.usernameLogIn.value, this.passwordLogIn.value)}}>Log In</button>
        </div>
        }
      </div>
      );

    const logOutMarkup = (
      <div>
        { logOutRequested ? <Loader text="logging out"/> :
        <div>
          { username }
          <button onClick={() => {logOut()}}>Log Out</button>
        </div>
        }
      </div>
      );

    const unloggedMarkup = (
      <div className="auth-unlogged-markup">
        { signUpRequested ? null : logInMarkup }
        { logInRequested ? null : signUpMarkup }
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

// TODO Proptypes
