import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PetContainer from './PetContainer';
import NewContainer from './NewContainer';

$(function() {
  if (document.getElementsByClassName('petApp')[0]) {
    let user_id = document.getElementsByClassName('petApp')[0].id;
    ReactDOM.render(
      <PetContainer user_id={user_id} />,
      document.getElementsByClassName('petApp')[0]
    );
  } else if (document.getElementsByClassName('newPet')[0]) {
    let user_id = document.getElementsByClassName('newPet')[0].id;
    ReactDOM.render(
      <NewContainer user_id={user_id} />,
      document.getElementsByClassName('newPet')[0]
    );
  }
});
