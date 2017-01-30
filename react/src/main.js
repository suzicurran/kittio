import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      "GAME",
      document.getElementById('app')
    );
  }
});
