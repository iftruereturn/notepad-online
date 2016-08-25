import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NoteView from '../containers/NoteView';
import ListView from '../containers/ListView';
import LandingPage from '../components/LandingPage';
import Auth from '../containers/Auth';
import App from './App';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='auth' component={Auth} />
        <Route path='notes' component={ListView} />
        <Route path='notes/(:noteId)' component={NoteView} />
      </Route>
    </Router>
  </Provider>
);

export default Root;