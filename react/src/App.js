
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pigName: null,
      pigAge: null,
      pigHunger: null,
      pigHappiness: null
    };
  }

  render() {
    return(
      <div className="row">
        <div className="large-2 column">
          &nbsp;
        </div>
        <div className="large-8 small-12 column text-center">
            <div className="large-3 small-12 column">
              <div className="row">pig name</div>
              <div className="row">pig image</div>
            </div>
            <div className="large-5 small-12 column">
              <div className="row">
                <div className="large-4 small-12 column">
                  <div className="large-12 small-6 column">pig hunger:</div>
                  <div className="large-12 small-6 column">:)</div>
                </div>
                <div className="large-4 small-12 column">
                  <div className="large-12 small-6 column">pig mood:</div>
                  <div className="large-12 small-6 column">:(</div>
                </div>
                <div className="large-4 small-12 column">
                  <div className="large-12 small-6 column">pig age:</div>
                  <div className="large-12 small-6 column">2</div>
                </div>
              </div>
              <div className="row">
                feed pig | pet pig
              </div>
            </div>
        </div>
        <div className="large-2 column">
          &nbsp;
        </div>
      </div>
    );
  }
}

export default App;
