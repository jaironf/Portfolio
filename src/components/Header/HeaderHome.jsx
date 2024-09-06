import React from 'react'
import { Box, Divider } from '@chakra-ui/react'



const HeaderHome = () => {
  return (
    <Box className='header-home'>
        <Box className='title-home-nav'>J<i>a</i>ir<i>o</i> <span className='space-between'>Nú<i>ñ</i>ez</span></Box>
        <Divider className='divider'/>
        <Box className='btn-home-nav'></Box>
    </Box>
  )
}

export default HeaderHome