import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import NoteView from '../containers/NoteView';
import ListView from '../containers/ListView';
// import User from '../containers/User';
import App from './App';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/notes' component={ListView} />
        <Route path='/notes/(:noteId)' component={NoteView} />
      </Route>
    </Router>
  </Provider>
);

export default Root;