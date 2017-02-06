import React from 'react';

const PetTile = props => {
  let feedOnClick = () => props.feedOnClick();
  let hugOnClick = () => props.hugOnClick();

  return(
    <div className="row">
      <div className="large-2 small-2 column">
        &nbsp;
      </div>
      <div className="large-8 small-8 column text-center main">
        <div className="large-3 small-12 column">
          <div className="row pet-name">{props.petName}</div>
          <div className="row">
            <div id="neutral" className="pusheen-gif"></div>
          </div>
        </div>
        <div className="large-9 small-12 column">
          <div className="row">
            <div className="large-1 small-0 column">&nbsp;</div>
            <div className="large-3 small-12 column value-box">
              <div className="large-12 small-6 column">Hunger:</div>
              <div className="large-12 small-6 column value-text"><div id="hungerValue">{props.petHunger}</div>/5</div>
            </div>
            <div className="large-1 small-0 column">&nbsp;</div>
            <div className="large-3 small-12 column value-box">
              <div className="large-12 small-6 column">Love:</div>
              <div className="large-12 small-6 column value-text"><div id="happinessValue">{props.petHappiness}</div>/5</div>
            </div>
            <div className="large-1 small-0 column">&nbsp;</div>
            <div className="large-3 small-12 column value-box">
              <div className="large-12 small-6 column">Age:</div>
              <div className="large-12 small-6 column value-text">{props.petAge} day(s)</div>
            </div>
          </div>
          <div className="row">
            <div className="large-12 small-0 column">&nbsp;</div>
          </div>
          <div className="row">
            <br />
            <button type="button" className="cuteButton" onClick={feedOnClick}>feed me</button> <button type="button" className="cuteButton" onClick={hugOnClick}>hug me</button>
          </div>
        </div>
      </div>
      <div className="large-2 small-2 column">
        &nbsp;
      </div>
    </div>
  );
};

export default PetTile;
