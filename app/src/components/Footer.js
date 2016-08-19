import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {

    console.log('Footer render');
     
    return (
      <footer className="footer">
        <Link to={'/'}>Notepad Online</Link>
      </footer>
    );
  }
}

export default Footer;