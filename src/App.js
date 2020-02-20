import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import './images/Marvel.png'

class App extends Component {

getCharacters = () => {
  return fetch('http://gateway.marvel.com/v1/public/characters?limit=100&ts=thesoer&apikey=50ad78c230f43edadebb63d4fe32f1f7&hash=b9d2938b56f1f57559b592329b254b28')
  .then(resp => resp.json())
}

componentDidMount() {
  this.getCharacters()
  .then(heros => this.setState({ heros: heros.data.results }))
}

state = {
  heros: []
}

//addDefaultSrc(event) {
//  event.target.src = 'Marvel.png'
//}

  render() {
    return (
      <MainContainer addDefaultSrc={this.addDefaultSrc} heros={this.state.heros} />
    )
  }

}

export default App;
