import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
// import App from './App';
import NoteView from '../containers/NoteView';
import ListView from '../containers/ListView';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/notes' component={ListView} />
      <Route path='/notes/(:noteId)' component={NoteView} />
    </Router>
  </Provider>
);

export default Root;