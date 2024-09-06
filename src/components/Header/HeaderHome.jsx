import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'



const HeaderHome = () => {
  const currentDate = new Date();

  const formattedDated = currentDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit', 
    second: '2-digit'
  });

  return (
    <Box className='header-home'>
        <Box className='title-home-nav'>J<i>a</i>ir<i>o</i> <span className='space-between'>Nú<i>ñ</i>ez</span></Box>
        <Divider className='divider'/>
        <Box className='subtitle-home-nav'>
          <Text className='fullstack-text'>FULL-STACK DEVELOPER</Text>
          <Text className='date-display'>Date {formattedDated}</Text>
          <Text className='email-text'>jaironf.94@gmail.com</Text>
          <Text className='time-display'>MAD {formattedTime}</Text>
        </Box>
    </Box>
  )
}

export default HeaderHome