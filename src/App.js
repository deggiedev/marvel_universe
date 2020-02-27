import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    heros: [],
    searchTerm: "",
    dropdownOption: 'a',
    sideOfCard: null
  }

componentDidMount() {
  setTimeout(() => {
  this.getCharacters()
  .then(heros => this.setState({heros: heros.data.results}))
  .then(this.setState({ done: true }));
  }, 1200);
  }

componentDidUpdate(prevProps, prevState) {
  if (prevState.dropdownOption !== this.state.dropdownOption) {
    setTimeout(() => {
      this.getCharacters()
      .then(heros => this.setState({heros: heros.data.results}))
      .then(this.setState({ done: true }));
      }, 1200);
  } else {}
}

getCharacters = () => {
  return fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.state.dropdownOption}&limit=100&ts=thesoer&apikey=50ad78c230f43edadebb63d4fe32f1f7&hash=b9d2938b56f1f57559b592329b254b28`)
  .then(resp => resp.json())
}

handleImageError = (event) => {
  event.target.src = 'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_fantastic.jpg'
}

handleSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value})
}

handleDropdownOption = (event) => {
  this.setState({dropdownOption: event.target.value})
}

flipCardSide = () => {
  this.setState({sideOfCard: !this.state.sideOfCard})
}

filterHeros = () => {
  if (this.state.searchTerm) {
    return this.state.heros.filter(hero => hero.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
  else {
    return this.state.heros
  }
}

  render() {
    return (
      <>
        <MainContainer sideOfCard={this.state.sideOfCard} flipCardSide={this.flipCardSide} handleDropdownOption={this.handleDropdownOption} handleSearchTerm={this.handleSearchTerm} handleImageError={this.handleImageError} heros={this.filterHeros()} />
      </>
    )
  }

}

export default App;