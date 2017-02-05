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
      <div>
        <input className="nameInput" type="text" onChange={this.nameInput} />
        <button type="button" onClick={this.createPet}>create pet</button>
      </div>
    );
  }
}

export default App;
