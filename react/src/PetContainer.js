import React, { Component } from 'react';
import PetTile from './PetTile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pigName: null,
      pigAge: null,
      pigHunger: null,
      pigHappiness: null
    };
    this.fetchData = this.fetchData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.feedPet = this.feedPet.bind(this);
    this.hugPet = this.hugPet.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 6000);
  }

  fetchData() {
    fetch(`/api/v1/pets/1`)
    .then(response => response.json())
    .then((jsonresponse) => {
      this.setState({
        petName: jsonresponse.name,
        petHunger: jsonresponse.hunger,
        petHappiness: jsonresponse.happiness,
        petAge: jsonresponse.age,
        petId: jsonresponse.id,
        userId: jsonresponse.user_id
      });
    });
  }

  feedPet(user_id) {
    let data = {
      interaction: {
        hug: false,
        feed: true,
      }
    };

    this.sendData(data, user_id);
  }

  hugPet(user_id) {
    let data = {
      interaction: {
        hug: true,
        feed: false,
      }
    };

    this.sendData(data, user_id);
  }

  sendData(data, user_id) {
    let target = null;
    if (data.interaction.hug)
      target = 'happiness';
    else if (data.interaction.feed) {
      target = 'hunger';
    }
    let jsonStringData = JSON.stringify(data);

    fetch(`/api/v1/pets/${user_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: jsonStringData
    })
    .then(response => response.json())
    .then((jsonresponse) => {
      let divTarget = `${target}Value`;
      let old_value = $(`#${divTarget}`).text();
      if (parseInt(old_value) != 5) {
        $(`#${divTarget}`).text((parseInt(old_value) + 1));
      }
      this.fetchData();
    });
  }

  render() {
    return(
      <PetTile
          key={this.state.petId}
          id={this.state.petId}
          user_id="1"
          petName={this.state.petName}
          petHunger={this.state.petHunger}
          petHappiness={this.state.petHappiness}
          petAge={this.state.petAge}
          feedOnClick={this.feedPet}
          hugOnClick={this.hugPet}
        />
    );
  }
}

export default App;
