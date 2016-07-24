import React from 'react';

export default class UserPanel extends React.Component {
  render() {
    const { username,
      logInRequested, signUpRequested, logOutRequested, loggedIn,
      signUp, logIn, logOut } = this.props;

    const signUpMarkup = (
      <div>
        { signUpRequested ? '...signing up...' :
        <div>
          <h2>Sign up</h2>
          Username: <input type="text" ref={node => { this.username = node }} />
          Password: <input type="text" ref={node => { this.password = node }} />
          Repeat password: <input type="text"/>
          <button onClick={() => {signUp(this.username.value, this.password.value)}}>Sign Up</button>
        </div>
        }
      </div>
      );

    const logInMarkup = (
      <div>
        { logInRequested ? '...logging in...' :
        <div>
          <h2>Log In</h2>
          Username: <input type="text" ref={node => { this.username = node }} />
          Password: <input type="text" ref={node => { this.password = node }} />
          <button onClick={() => {logIn(this.username.value, this.password.value)}}>Log In</button>
        </div>
        }
      </div>
      );

    const logOutMarkup = (
      <div>
        { logOutRequested ? '...logging out...' :
        <div>
          { username }
          <button onClick={() => {logOut()}}>Log Out</button>
        </div>
        }
      </div>
      );

    const unloggedMarkup = (
      <div>
        { logInMarkup }
        { signUpMarkup }
      </div>
      );

    return (
      <div>
        { loggedIn ? 
          logOutMarkup : 
          unloggedMarkup }
          <hr/>
      </div>
      );
  }
}

// TODO Proptypes
