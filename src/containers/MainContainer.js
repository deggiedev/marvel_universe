import React from 'react'
import CharacterList from './CharacterList'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import './MainContainer.css'

const MainContainer = (props) => {
    return (
        <>
            <Header />
            <SearchBox handleDropdownOption={props.handleDropdownOption} handleSearchTerm={props.handleSearchTerm} />
            <CharacterList sideOfCard={props.sideOfCard} flipCardSide={props.flipCardSide} handleSearchTerm={props.handleSearchTerm} handleImageError={props.handleImageError} className="CharacterList" heros={props.heros}/>
        </>
    )
}

export default MainContainer;