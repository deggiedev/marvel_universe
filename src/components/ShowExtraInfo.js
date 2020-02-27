import React from 'react'
import { Box, Card, Image, Heading } from 'rebass'
import MarvelImage from '../images/marvel_comics.jpg'

const ShowExtraInfo = (props) => {
    
    return (
         <Box className="Image" width={255} height={250}>
             <Card>
            <Image width={250} src={MarvelImage}/>
            <Heading>Name</Heading>
            <Heading>Stat 2</Heading>
            <Heading>Stat 3</Heading>
            <Heading>Stat 4</Heading>
            <Heading>Stat 5</Heading>
            </Card>
         </Box>
    )
}

export default ShowExtraInfo;