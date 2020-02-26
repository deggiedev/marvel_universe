import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

class App extends Component {

getCharacters = () => {
  return fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.state.dropdownOption}&ts=thesoer&apikey=50ad78c230f43edadebb63d4fe32f1f7&hash=b9d2938b56f1f57559b592329b254b28`)
  .then(resp => resp.json())
}

componentDidMount() {
  this.getCharacters()
  .then(heros => this.setState({heros: heros.data.results}))
}

componentDidUpdate(prevState) {
  if (prevState.dropdownOption !== this.state.dropdownOption) {
    this.getCharacters()
    .then(heros => this.setState({heros: heros.data.results}))
  } else {

  }
}

// rendering a loading page whilst fetch is completed. Check component did mount fucntion and loading element before accpeting change.

//componentDidMount() {
//  setTimeout(() => {
//  this.getCharacters()
//  .then(heros => this.setState({heros: heros.data.results}))
//  .then(this.setState({ done: true }));
//  }, 1200);
//  }

// API calls timed out and therefore could not complete loading page implementaiton 

state = {
  done: undefined,
  heros: [],
  searchTerm: "",
  dropdownOption: 'a'
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
        {!this.state.done ? <h1>Loading</h1> :
        <MainContainer handleDropdownOption={this.handleDropdownOption} handleSearchTerm={this.handleSearchTerm} handleImageError={this.handleImageError} heros={this.filterHeros()} />}
      </>
    )
  }

}

export default App;