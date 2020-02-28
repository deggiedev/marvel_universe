import React, { Component } from 'react'
import { Box, Card, Image, Heading } from 'rebass'
import './CardComponent.css'
import MarvelComicsImage from '../images/marvel_comics_2.jpg'
import HeroStats from '../images/hero_stats.png'

class CardComponent extends Component {

    state = {
        flipToBack: null,
    }

    flipToBack = () => {
        this.setState({ flipToBack: !this.state.flipToBack })
    }

    setImageSrc = () => {
        if (this.state.flipToBack === true) {
            return HeroStats
        }
        else if (!this.props.hero.thumbnail.path.includes('image_not_available')) {
            return `${this.props.hero.thumbnail.path}/standard_fantastic.jpg`
        } else {
            return MarvelComicsImage
        }
    }

    render() {
        return (

            <Box px={2} py={2} width={1/4} >
                <Card className="Card" onClick={() => this.flipToBack()}>
                    <Heading fontFamily='Masked Marvel'>{this.props.hero.name}</Heading>
                    <Image onError={this.props.handleImageError} className="Image" src={this.setImageSrc()}/>
                </Card>
            </Box>       
    
        )
    }
}

export default CardComponent;