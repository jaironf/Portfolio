import React from 'react'
import { Box, Divider, Image, Text } from '@chakra-ui/react'
import './AboutMe-Pic.scss'


const AboutMe = () => {
  return (
    <Box className='aboutme-continer'>
        <Box className='title-about-nav'>
            <Text><i>A</i>bo<i>u</i>t <span className='space-between'><i>M</i>e</span></Text>
            <Divider className='divider'/>
        </Box>
        <Box className='pic-container'>
            <Box className='profile-pic'>
                <Image src='src/assets/Profile-pic.png' alt='profile-pic'/>
            </Box>
            <Box className='description-container'>
              <Text className='description'>Hola caramierda</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutMe