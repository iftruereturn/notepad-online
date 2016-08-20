import React from 'react';
import { Link } from 'react-router';
import FeatureItem from './landing_page_components/FeatureItem';

const LandingPage = () => (
  <div className="landing-container">
    <div className="landing-container-presentation">
      <h1>Notepad Online</h1>
      <div>Save, access, and edit your notes</div>
      <Link to={'/notes'}>Start using it right now</Link>
    </div>
    <div className="landing-container-features">
      <h2>Features</h2>
      <ul>
        <li>
          <FeatureItem>Save your notes easily</FeatureItem>
        </li>
        <li>
          <FeatureItem>Access notes from everywhere</FeatureItem>
        </li>
        <li>
          <FeatureItem>Find notes by tags</FeatureItem>
        </li>
        <li>
          <FeatureItem>Hide your notes from the others</FeatureItem>
        </li>
      </ul>
      <div>
        <Link to={'/notes'}>Wanna try it?</Link>
      </div>
    </div>
  </div>
);

export default LandingPage;