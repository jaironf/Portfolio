import React from 'react'
import { Box } from '@chakra-ui/react'
import HeaderHome from '../../components/Header/HeaderHome'
import Landing from '../../components/Landing/Landing'
import AboutMe from '../../components/AboutMe/AboutMe'
import './Portfolio.scss'

const Porfolio = () => {
  return (
   <Box className='body'>
        <HeaderHome/>
        <Landing/>
        <AboutMe/>
   </Box>
  )
}

export default Porfolio