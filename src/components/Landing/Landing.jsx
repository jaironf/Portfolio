import React from 'react'
import { Box, Text } from '@chakra-ui/react'


const Landing = () => {
  return (
    <Box className='landing-continer'>
        <Box className='landing-box1'>
            <Box className='card-about'>About ①</Box>
            <Text className='logo'>Spain</Text> 
            <Box className='projects-card'>Projects ②</Box>
        </Box>
    </Box>
  )
}

export default Landing