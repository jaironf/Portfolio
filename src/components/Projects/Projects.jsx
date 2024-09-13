import React from 'react'
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/react'
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
        <Box className='project-cards'>
          <Grid h='500px' w='500px' templateRows='repeat (3, 1fr)' templateColumns='(6, 1fr)' gap={0}>
            <GridItem rowSpan={2} colSpan={2} bg='#3E3C36' color={'#FBF0DF'} borderRadius='0 0 50px 0'>PROJECT <span>01</span></GridItem>
          </Grid>
          <Grid h='500px' w='500px' templateRows='repeat (3, 1fr)'>
            <GridItem rowSpan={2} bg='#E7A92D' borderRadius='0 0 50px 0'>PROJECT <span>02</span></GridItem>
          </Grid>
        </Box>
        <Box className='project-cards'>
          <Grid h='500px' w='770px' templateRows='repeat (3, 1fr)'>
            <GridItem rowSpan={2} bg='#DB4C44' color={'#FBF0DF'} borderRadius='0 0 50px 0'>PROJECT <span>03</span></GridItem>
          </Grid>
          <Grid h='500px' w='600px' templateRows='repeat (3, 1fr)'>
            <GridItem rowSpan={2} bg='#FBF0DF' borderRadius='0 0 50px 0'>PROJECT <span>04</span></GridItem>
          </Grid>
        </Box>
      </Box>
  )
}

export default Projects