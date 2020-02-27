import React from 'react'
import { Box, Card, Image, Heading } from 'rebass'
import './CardComponent.css'
import MarvelComicsImage from '../images/marvel_comics_2.jpg'

const CardComponent = (props) => {
    
    return (

        <Box px={2} py={2} width={1/4} >
            <Card className="Card" onClick={() => props.handleClick() }>
                <Heading fontFamily='Masked Marvel'>{props.hero.name}</Heading>
                <Image onError={props.handleImageError} className="Image" src={!props.hero.thumbnail.path.includes('image_not_available') ? `${props.hero.thumbnail.path}/standard_fantastic.jpg` : MarvelComicsImage}/>
            </Card>
        </Box>       

    )
}

export default CardComponent;