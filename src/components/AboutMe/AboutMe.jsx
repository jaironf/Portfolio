import React, { useState } from 'react'
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import './AboutMe-Pic.scss'


const AboutMe = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const textInEnglish = 'I am a graduate in Tourism who has recently made a career shift by pursuing Fullstack Development. My passion for building websites inspired this change, and after completing my studies, I am now a junior developer with a strong desire to demonstrate my skills. I am currently seeking an opportunity to apply everything I have learned and grow professionally in the tech industry.';

  const textInSpanish = 'Soy graduado en Turismo y he dado un giro a mi carrera al estudiar desarrollo Fullstack. Mi pasión por crear sitios web inspiró este cambio, y después de completar mis estudios, ahora soy un desarrollador junior con muchas ganas de demostrar mis habilidades. Actualmente estoy buscando una oportunidad para aplicar todo lo que he aprendido y crecer profesionalmente en la industria tecnológica.';

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }


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
              <Text className='description'>{isEnglish ? textInEnglish: textInSpanish}</Text>

              <Button className='language-toggle-btn' colorScheme='yellow' onClick={toggleLanguage}>{isEnglish ? 'Cambiar a Español' : 'Switch to English' }</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutMe