import React from 'react';
import Footer from './Footer.jsx';
import Header from '../containers/Header.jsx';

const App = ({ children }) => (
  <div className="app">
    <div className="content">
      <Header />
      { children }
      <div className="push" />
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
