import React from 'react'
import { Input } from '@rebass/forms'
import { Box } from 'rebass'

const SearchBox = () => {
    
    return (
        <Box>
            <Input
                id='SearcBox'
                name='SearcBbox'
                type='SearchBox'
                placeholder='Avengers...'
            />
        </Box>
    )
}

export default SearchBox; 