import React from 'react';
import Auth from '../containers/Auth';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ margin: '0 auto', maxWidth: '900px' }}>
        <Auth></Auth>
        {this.props.children}
      </div>
    );
  }
}