import React from 'react';

export default class UserPanel extends React.Component {
  render() {
    const { username,
      logInRequested, signUpRequested, logOutRequested, loggedIn,
      signUp, logIn, logOut } = this.props;

    const signUpMarkup = (
      <div>
        <h2>Sign up</h2>
        Username: <input type="text"/>
        Password: <input type="text"/>
        Repeat password: <input type="text"/>
        <button>Sign Up</button>
      </div>
      );

    const logInMarkup = (
      <div>
        <h2>Log In</h2>
        Username: <input type="text"/>
        Password: <input type="text"/>
        <button>Log In</button>
      </div>
      );

    const logOutMarkup = (
      <div>
        { username }
        <button>Log Out</button>
      </div>
      );

    return (
      <div>
        
      </div>
      );
  }
}

// TODO Proptypes
