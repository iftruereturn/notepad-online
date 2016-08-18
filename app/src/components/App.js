import React from 'react';
import Auth from '../containers/Auth';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Auth></Auth>
        <div className="content">
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}