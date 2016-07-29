import React from 'react';
import Auth from '../containers/Auth';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Auth></Auth>
        {this.props.children}
      </div>
    );
  }
}