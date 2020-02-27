import React from 'react'
import { Box, Card, Image, Heading } from 'rebass'
import './CardComponent.css'
import ShowExtraInfo from '../components/ShowExtraInfo'

const CardComponent = (props) => {
    
    return (
        
        <Box px={2} py={2} width={1/4} >
            <Card className="Card" onClick={() => props.handleClick(props.hero) }>
                <Heading fontFamily='Masked Marvel'>{props.hero.name}</Heading>
                <Image onError={props.handleImageError} className="Image" src={`${props.hero.thumbnail.path}/standard_fantastic.jpg`}/>
            </Card>
            <ShowExtraInfo/>
        </Box>
        
         
    )
}

export default CardComponent;