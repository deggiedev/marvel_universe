import React from 'react'
import { Box, Card, Image, Heading } from 'rebass'
import './CardComponent.css'

const CardComponent = (props) => {
    
    return (
        <Box px={2} py={2} width={1/4}>
            <Card className="Card" onClick={() => props.handleClick(props.hero) }>
                <Image onError={props.handleImageError} className="Image" src={`${props.hero.thumbnail.path}/standard_fantastic.jpg`}/>
                <Heading fontFamily='Masked Marvel'>{props.hero.name}</Heading>
            </Card>
        </Box>
    )
}

export default CardComponent;