import React from 'react'
import CardComponent from '../components/CardComponent'
import { Flex } from 'rebass'
import './CharacterList.css'

const CharacterList = (props) => {
    return (
        <Flex flexWrap='wrap'>
            {props.heros.map((hero, key) => !hero.thumbnail.path.includes('image_not_available') ? <CardComponent sideOfCard={props.sideOfCard} handleClick={props.flipCardSide} handleImageError={props.handleImageError} key={key} hero={hero} /> : null)}
        </Flex>
    )
}

export default CharacterList;