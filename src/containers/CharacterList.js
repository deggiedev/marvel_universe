import React from 'react'
import CardComponent from '../components/CardComponent'
import { Flex } from 'rebass'
import './CharacterList.css'

const CharacterList = (props) => {
    return (
        <Flex flexWrap='wrap' mx={-2}>
            {props.heros.map((hero, key) => <CardComponent key={key} hero={hero} />)}
        </Flex>
    )
}

export default CharacterList;