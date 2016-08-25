import React from 'react';
import Footer from './Footer';
import Header from '../containers/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <Header></Header>
          {this.props.children}
          <div className="push"></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}