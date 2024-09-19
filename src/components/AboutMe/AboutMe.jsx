import React, { useState } from 'react'
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import './AboutMe-Pic.scss'

const AboutMe = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const textInEnglish = 'I am a graduate in Tourism who has transitioned into a career in tech by completing an intensive Fullstack Web Development bootcamp at EDEM, with over 480 hours of hands-on practice. My passion for creating websites inspired this change. After finishing the bootcamp with a real-world project where I collaborated with Data Science and UX/UI teams, I am now a junior developer eager to showcase my skills. I am currently seeking an opportunity to apply my knowledge and continue growing professionally in the tech industry.';

  const textInSpanish = 'Soy graduado en Turismo y he reconvertido mi carrera al completar un bootcamp intensivo de desarrollo web Fullstack en EDEM, con más de 480 horas de práctica. Mi pasión por la creación de sitios web impulsó este cambio. Tras finalizar el bootcamp con un proyecto real en el que colaboré con equipos de Ciencia de Datos y UX/UI, ahora soy un desarrollador junior entusiasmado por demostrar mis habilidades. Estoy buscando una oportunidad para aplicar mis conocimientos y seguir creciendo profesionalmente en la industria tecnológica.';

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
                <Image src='/Users/jaironf/Desktop/Portfolio-Jairo/src/assets/Profile-pic.png' alt='profile-pic'/>
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