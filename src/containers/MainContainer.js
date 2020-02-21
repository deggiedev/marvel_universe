import React from 'react'
import CharacterList from './CharacterList'
import Header from '../components/Header'
import './MainContainer.css'

const MainContainer = (props) => {
    return (
        <>
            <Header />
            <CharacterList handleImageError={props.handleImageError} className="CharacterList" heros={props.heros}/>
        </>
    )
}

export default MainContainer;