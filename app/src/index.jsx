import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import configureStore from './stores/configureStore';

require('../../node_modules/font-awesome/css/font-awesome.css');

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
