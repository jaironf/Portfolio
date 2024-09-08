import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <Box className='aboutme-continer'>
        <Box className='title-about-nav'>
            <Text><i>A</i>bo<i>u</i>t <span className='space-between'><i>M</i>e</span></Text>
            <Divider className='divider'/>
        </Box>
    </Box>
  )
}

export default AboutMe