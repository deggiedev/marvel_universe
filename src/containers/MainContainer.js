import React from 'react'
import CharacterList from './CharacterList'
import './MainContainer.css'

const MainContainer = (props) => {
    return (
        <>
        <CharacterList className="CharacterList" heros={props.heros}/>
        </>
    )
}

export default MainContainer;