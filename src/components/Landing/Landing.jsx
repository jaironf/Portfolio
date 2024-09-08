import React, { useEffect, useState } from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'


const Landing = () => {
  const translations = ['HOLA', 'KAIXO', 'HELLO', 'BONJOUR', 'CIAO', 'HALLO', 'OLÁ', 'नमस्ते', 'こんにちは', 'Привет', '你好']

  const [ currentLanguageIndex, setCurrentLanguageIndex ] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % translations.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [translations.length])

  return (
    <Box className='landing-continer'>
        <Box className='landing-box1'>
            <Box className='card-about'>About ①</Box>
            <Text className='logo'>{translations[currentLanguageIndex]}</Text> 
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