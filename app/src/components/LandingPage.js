import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => (
  <div>
    <div>
      <h1>Notebook-Online</h1>
      <div>Save, access, and edit your notes</div>
      <Link to={'/notes'}>Start using it right now</Link>
    </div>
    <div>
      <h2>Features</h2>
      <ul>
        <li>Save your notes easily</li>
        <li>Access notes from everywhere</li>
        <li>Find notes by tags</li>
        <li>Hide your notes from the world</li>
      </ul>
    </div>
      <Link to={'/notes'}>Wanna try it?</Link>
  </div>
);

export default LandingPage;