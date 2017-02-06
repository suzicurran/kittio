import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      petName: null
    };
    this.nameInput = this.nameInput.bind(this);
    this.createPet = this.createPet.bind(this);
  }

  nameInput(event) {
    let newName = event.target.value;
    this.setState({petName: newName});
  }

  createPet() {
    let data = {
      newPet: {
        name: this.state.petName
      }
    };

    let jsonStringData = JSON.stringify(data);

    fetch(`/api/v1/pets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: jsonStringData
    })
    .then(response => response.json())
    .then((jsonresponse) => {
      window.location.reload(true);
    });
  }

  render() {
    return(
      <div className="row text-center">
        <div className="large-3 small-2 column">&nbsp;</div>
        <div className="large-6 small-8 column main">
          <div className="row">
            <div id="hi" className="pusheen-gif">
            </div>
          </div>
          <div className="row">
            <div className="large-1 small-1 column">&nbsp;</div>
            <div className="large-10 small-10 column">
              <div className="row input-box">
                Give your new kitty a name:
                <input className="nameInput" type="text" onChange={this.nameInput} />
              </div>
            </div>
            <div className="large-1 small-1 column">&nbsp;</div>
          </div>
          <div className="row">
            <button type="button" className="cuteButton" onClick={this.createPet}>Submit</button>
          </div>
        </div>
        <div className="large-3 small-2 column">&nbsp;</div>
      </div>
    );
  }
}

export default App;
