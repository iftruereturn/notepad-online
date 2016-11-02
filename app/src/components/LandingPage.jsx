import React from 'react';
import { Link } from 'react-router';
import FeatureItem from './landing_page_components/FeatureItem.jsx';

class LandingPage extends React.Component {

  componentDidMount() {
    document.title = 'Notepad Online';
  }

  render() {
    return (
      <div className="landing-container">
        <div className="landing-container-title">Notepad Online</div>
        <div className="landing-container-presentation">
          <div>Save, access, and edit your notes</div>
          <Link to={'/notes'}>Start using it right now</Link>
        </div>
        <div className="landing-container-features">
          <div className="landing-container-features-title">Features</div>
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
          <div className="landing-container-try-it">
            <Link to={'/notes'}>Wanna try it?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
