import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});
