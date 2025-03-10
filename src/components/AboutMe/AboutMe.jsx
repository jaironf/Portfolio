import React, { useState } from 'react'
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import './AboutMe-Pic.scss'

const AboutMe = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const textInEnglish = 'I am a Fullstack Developer specializing in the MERN stack, with a strong foundation in HTML, CSS, and JavaScript. I focus on developing innovative digital solutions that enhance user experience and optimize processes. My background in Tourism and Business Management provides me with a unique perspective to create applications tailored to client needs. I am proactive, adaptable, and committed to continuous learning to stay updated on the latest technological trends.';

  const textInSpanish = 'Soy un Desarrollador Fullstack especializado en el stack MERN, con una sólida base en HTML, CSS y JavaScript. Me enfoco en desarrollar soluciones digitales innovadoras que mejoran la experiencia del usuario y optimizan procesos. Mi formación en Turismo y Dirección de Empresas Turísticas me aporta una perspectiva única para crear aplicaciones adaptadas a las necesidades del cliente. Soy proactivo, adaptable y comprometido con el aprendizaje continuo para mantenerme actualizado en las últimas tendencias tecnológicas.';

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }


  return (
    <Box className='aboutme-container' id='AboutMe'>
        <Box className='title-about-nav'>
            <Text><i>A</i>bo<i>u</i>t <span className='space-between'><i>M</i>e</span></Text>
            <Divider className='divider'/>
        </Box>
        <Box className='pic-container'>
            <Box className='profile-pic'>
                <Image src='/Profile-pic.png' alt='profile-pic'/>
            </Box>
            <Box className='description-container'>
              <Text className='description'>{isEnglish ? textInEnglish : textInSpanish}</Text>

              <Button className='language-toggle-btn' bg='#E7A92D' onClick={toggleLanguage}>{isEnglish ? 'Cambiar a Español' : 'Switch to English' }</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutMe