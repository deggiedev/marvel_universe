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
            <CharacterList getHeroStats={props.getHeroStats} handleSearchTerm={props.handleSearchTerm} handleImageError={props.handleImageError} className="CharacterList" heros={props.heros}/>
        </>
    )
}

export default MainContainer;