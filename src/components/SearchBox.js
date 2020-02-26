import React from 'react'
import { Input, Select } from '@rebass/forms'
import { Box, Flex } from 'rebass'
import { Alphabet } from '../data/Alphabet.js'

const SearchBox = (props) => {

    return (
        <>
        <Flex
            px={2}
            alignItems='center'>
                <Box pt={3} pb={3} className='searchBoxContainer'>
                    <Input
                        onChange={(event) => props.handleSearchTerm(event)}
                        id='SearcBox'
                        name='SearcBbox'
                        type='SearchBox'
                        placeholder='Avengers...'/>
                </Box>
                <Box pl={3} width={100}>
                    <Select onChange={(event) => props.handleDropdownOption(event)}
                        id='alphabet'
                        name='alphabet'
                        defaultValue='a'>
                            {Alphabet.map(letter => 
                                <option>
                                    {letter}
                                </option>
                            )}
                    </Select>
                </Box>

            </Flex>
        </>
    )
}

export default SearchBox; 