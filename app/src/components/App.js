import React from 'react';
import User from '../containers/User';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <User></User>
        {this.props.children}
      </div>
    );
  }
}