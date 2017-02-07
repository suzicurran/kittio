import React, { Component } from 'react';
import PetTile from './PetTile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      petName: null,
      petHunger: null,
      petHappiness: null,
      petAge: null,
      petMood: "neutral",
      petQuote: "Meh.",
      userName: "my owner"
    };
    this.fetchData = this.fetchData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.feedPet = this.feedPet.bind(this);
    this.hugPet = this.hugPet.bind(this);
    this.returnMood = this.returnMood.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 4000);
  }

  fetchData() {
    fetch(`/api/v1/pets/${this.props.user_id}`)
    .then(response => response.json())
    .then((jsonresponse) => {
      let newHunger = jsonresponse.hunger;
      let newHappiness = jsonresponse.happiness;
      let newMood = this.returnMood(newHunger, newHappiness);
      let newQuote = this.returnQuote(newMood);
      this.setState({
        petMood: newMood,
        petName: jsonresponse.name,
        userName: jsonresponse.user_name,
        petHunger: newHunger,
        petHappiness: newHappiness,
        petAge: jsonresponse.age,
        petQuote: newQuote
      });
    });
  }

  feedPet() {
    let data = {
      interaction: {
        hug: false,
        feed: true,
      }
    };

    this.sendData(data);
  }

  hugPet() {
    let data = {
      interaction: {
        hug: true,
        feed: false,
      }
    };

    this.sendData(data);
  }

  returnMood(hunger, happiness) {
    let output = '';
    switch (true) {
      case (happiness <= 4 && (happiness <= hunger)):
          output = "sad";
          break;
      case (hunger <= 4 && (hunger <= happiness)):
          output = "hungry";
          break;
      case (happiness > 4 && hunger > 4):
          output = "happy";
          break;
      default:
          output = "neutral";
    }
    return output;
  }

  returnQuote (mood) {
    let output = '';
    switch (mood) {
      case "sad":
          output = "Can haz hugs?";
          break;
      case "hungry":
          output = "I want to nom a pizza.";
          break;
      case "happy":
          output = `I love ${this.state.userName}!`;
          break;
      default:
          output = "Meh. I'm almost happy...";
    }
    return output;
  }

  sendData(data) {
    let target = null;
    if (data.interaction.hug)
      target = 'happiness';
    else if (data.interaction.feed) {
      target = 'hunger';
    }
    let jsonStringData = JSON.stringify(data);

    fetch(`/api/v1/pets/${this.props.user_id}`, {
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
        if (target == 'happiness') {
          this.setState({
            petMood: "snuggle",
            petQuote: "I loooove hugs and snuggles!!"
          });
        } else if (target == 'hunger') {
          this.setState({
            petMood: "eat",
            petQuote: "I looooove pizza!! Nom!!"
          });
        }
      }
    });
  }

  render() {
    console.log(this.state.petMood);
    return(
      <PetTile
          key={this.props.user_id}
          user_id={this.props.user_id}
          petName={this.state.petName}
          petHunger={this.state.petHunger}
          petHappiness={this.state.petHappiness}
          petAge={this.state.petAge}
          feedOnClick={this.feedPet}
          hugOnClick={this.hugPet}
          mood={this.state.petMood}
          quote={this.state.petQuote}
        />
    );
  }
}

export default App;
