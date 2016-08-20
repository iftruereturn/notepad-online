import React from 'react';
import Auth from '../containers/Auth';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <Auth></Auth>
          {this.props.children}
          <div className="push"></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}