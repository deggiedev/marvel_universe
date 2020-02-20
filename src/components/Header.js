import React from 'react'
import { Heading } from 'rebass'
import '../containers/CharacterList.css'


const Header = () => {
    return (
        <Heading textAlign='center' fontFamily='Masked Marvel' fontSize={[ 8 ]} color='primary'>The Marvel Universe</Heading>
    )
}

export default Header;