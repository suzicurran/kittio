import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PetContainer from './PetContainer';

$(function() {
  if (document.getElementById('petApp')) {
    ReactDOM.render(
      <PetContainer />,
      document.getElementById('petApp')
    );
  }
});
