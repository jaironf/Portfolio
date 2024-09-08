import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'


const Landing = () => {
  return (
    <Box className='landing-continer'>
        <Box className='landing-box1'>
            <Box className='card-about'>About ①</Box>
            <Text className='logo'>Spain</Text> 
            <Box className='projects-card'>Projects ②</Box>
          <Divider className='divider'/>
        </Box>
        <Box className='landing-box2'>
          <Text className='tex-fullstack'>FullStack</Text>
          <Text className='text-developer'>Developer</Text>
        </Box>
    </Box>
  )
}

export default Landing