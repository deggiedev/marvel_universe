import React from 'react'
import { Input } from '@rebass/forms'
import { Box } from 'rebass'

const SearchBox = (props) => {
    
    return (
        <Box pt={3} pb={3} className='searchBoxContainer'>
            <Input
                onChange={(event) => props.handleSearchTerm(event)}
                id='SearcBox'
                name='SearcBbox'
                type='SearchBox'
                placeholder='Avengers...'
            />
        </Box>
    )
}

export default SearchBox; 