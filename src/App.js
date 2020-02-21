import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

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
  heros: [],
  searchTerm: null
}

handleImageError = (event) => {
  event.target.src = 'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_fantastic.jpg'
}

handleSearchTerm = (event) => {
  this.setState({searchTerm: event.target.value})
}

  render() {
    return (
      <MainContainer handleSearchTerm={this.handleSearchTerm} handleImageError={this.handleImageError} heros={this.state.heros} />
    )
  }

}

export default App;
