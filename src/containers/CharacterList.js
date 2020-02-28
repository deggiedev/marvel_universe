import React from 'react'
import CardComponent from '../components/CardComponent'
import { Flex } from 'rebass'
import './CharacterList.css'

const CharacterList = (props) => {
    return (
        <Flex flexWrap='wrap'>
            {props.heros.map((hero, key) => <CardComponent getHeroStats={props.getHeroStats} handleImageError={props.handleImageError} key={key} hero={hero} />)}
        </Flex>
    )
}

export default CharacterList;