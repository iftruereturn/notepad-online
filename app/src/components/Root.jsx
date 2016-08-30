import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NoteView from '../containers/NoteView.jsx';
import ListView from '../containers/ListView.jsx';
import LandingPage from '../components/LandingPage.jsx';
import Auth from '../containers/Auth.jsx';
import App from './App.jsx';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="auth" component={Auth} />
        <Route path="notes" component={ListView} />
        <Route path="notes/(:noteId)" component={NoteView} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
