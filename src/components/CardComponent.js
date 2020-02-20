import React from 'react'
import { Box, Card, Image, Heading } from 'rebass'
  

const CardComponent = (props) => {
    return (
        <Box px={2} py={2} width={1/4}>
            <Card>
                <Image src={`${props.hero.thumbnail.path}/standard_fantastic.jpg`} />
                <Heading>{props.hero.name}</Heading>
            </Card>
        </Box>
    )
}

export default CardComponent;