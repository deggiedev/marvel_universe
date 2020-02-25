import React from 'react'
import CharacterList from './CharacterList'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import './MainContainer.css'
import {Button} from 'rebass'

const MainContainer = (props) => {
    return (
        <>
            <Header />
            <SearchBox handleSearchTerm={props.handleSearchTerm} />
            <Button bg={'#D31027'} fontFamily='Masked Marvel' variant='outline' onClick={() => props.handlePagination()}>Next</Button>
            <CharacterList handleSearchTerm={props.handleSearchTerm}  handleImageError={props.handleImageError} className="CharacterList" heros={props.heros}/>
            <Button bg={'#D31027'} fontFamily='Masked Marvel' variant='outline' onClick={() => props.handlePagination()}>Next</Button>
        </>
    )
}

export default MainContainer;