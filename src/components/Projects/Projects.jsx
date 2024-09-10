import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'
import './Projects.scss'
const Projects = () => {
  return (
    <Box className='projects-container'>
      <Box className='selected-box'>
        <Text className='selected-title'>S<i>e</i>lec<i>t</i>e<i>d</i></Text>
        <Divider className='divider-body' />
      </Box>
      <Box className='projects-box'>
        <Text className='projects-title'><i>P</i>ro<i>j</i>ec<i>t</i>s</Text>
        <Divider className='divider-body' />
      </Box>
    </Box>
  )
}

export default Projects