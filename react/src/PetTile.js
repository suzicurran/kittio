import React from 'react';

const PetTile = props => {
  let feedOnClick = () => props.feedOnClick(props.user_id);
  let hugOnClick = () => props.hugOnClick(props.user_id);

  return(
    <div className="row">
      <div className="large-2 column">
        &nbsp;
      </div>
      <div className="large-8 small-12 column text-center">
          <div className="large-3 small-12 column">
            <div className="row">{props.petName}</div>
            <div className="row">pig image</div>
          </div>
          <div className="large-5 small-12 column">
            <div className="row">
              <div className="large-4 small-12 column">
                <div className="large-12 small-6 column">Hunger:</div>
                <div className="large-12 small-6 column"><div id="hungerValue">{props.petHunger}</div>/5</div>
              </div>
              <div className="large-4 small-12 column">
                <div className="large-12 small-6 column">Happiness:</div>
                <div className="large-12 small-6 column"><div id="happinessValue">{props.petHappiness}</div>/5</div>
              </div>
              <div className="large-4 small-12 column">
                <div className="large-12 small-6 column">Age:</div>
                <div className="large-12 small-6 column">{props.petAge} day(s)</div>
              </div>
            </div>
            <div className="row">
              <button type="button" onClick={feedOnClick}>feed pet</button> | <button type="button" onClick={hugOnClick}>hug pet</button>
            </div>
          </div>
      </div>
      <div className="large-2 column">
        &nbsp;
      </div>
    </div>
  );
};

export default PetTile;
