import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import MarvelComicsImage from './images/marvel_comics_2.jpg'

class App extends Component {

  state = {
    heros: [],
    searchTerm: "",
    dropdownOption: 'a',
    heroNames: []
  }

componentDidMount() {
  this.getCharacters()
  .then(heros => this.setState({heros: heros.data.results}))
  //.then(this.getPowerStats())
  }

componentDidUpdate(prevProps, prevState) {
  if (prevState.dropdownOption !== this.state.dropdownOption) {
      this.getCharacters()
      .then(heros => this.setState({heros: heros.data.results}))
      .then(this.setState({ done: true }));   
  } else {}
}

getCharacters = () => {
  return fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.state.dropdownOption}&limit=100&ts=thesoer&apikey=50ad78c230f43edadebb63d4fe32f1f7&hash=b9d2938b56f1f57559b592329b254b28`)
  .then(resp => resp.json())
}

//getPowerStats = () => {
  //return fetch(`https://superheroapi.com/api/10158112178385127/search/${HeroName}`)
//} fetch hero stats based on hero name. callback function triggerd by onClick which has been passed a hero object. This initiates the correct fetch.


handleImageError = (event) => {
  event.target.src = MarvelComicsImage
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
        <MainContainer handleDropdownOption={this.handleDropdownOption} handleSearchTerm={this.handleSearchTerm} handleImageError={this.handleImageError} heros={this.filterHeros()} />
      </>
    )
  }

}

export default App;