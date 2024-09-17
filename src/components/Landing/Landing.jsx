import React, { useEffect, useState } from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


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
          <Link to='/AboutMe'>
            <Box className='card-about'>About <span className='space-between'>①</span></Box>
            </Link>
            <Text className='hello'>{translations[currentLanguageIndex]}</Text> 
            <Link to='/Projects'>
            <Box className='projects-card'>Projects <span className='space-between'>②</span></Box></Link>
          <Divider className='divider-body'/>
        </Box>
        <Box className='landing-box2'>
          <Text className='text-fullstack'>FullStack <span className='space-between'>Developer</span></Text>
          <Divider className='divider-body'/>
        </Box>
        <Box className='landing-box3'>
          <Text className='based-text'>Based</Text>
          <Link to='/Contact'>
          <Box className='card-contact'>Contact <span className='space-between'>③</span></Box></Link>
          <Text className='based-text'>in Valencia</Text>
          <Divider className='divider-body'/>
        </Box>
    </Box>
  )
}

export default Landing