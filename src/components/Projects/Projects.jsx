import React from 'react'
import { Box, Button, Divider, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react'
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

        <Grid h='500px' w='500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(6, 1fr)' gap={0}>
          <GridItem className='grid-item' rowSpan={2} colSpan={6} bg='#3E3C36' color='#FBF0DF' borderRadius='0 0 50px 0' display='flex' flexDirection='column' alignItems='center' p={4}>
            <Text fontSize='xxl'>
              Oddliquor Website <span>01</span>
            </Text>
            <Box className='description-body' maxW='80%' mt='5vw'>
              <Text fontSize='15px' fontFamily='sans-serif'>
                Esta es la primera página web que desarrollé en el bootcamp de Fullstack Development, utilizando solo HTML y CSS. El sitio, diseñado para el artista Oddliquor, cuenta con cuatro secciones: una página principal con una breve introducción, una biografía que destaca su carrera, una galería de imágenes, y una sección de contacto con un formulario. A través de este proyecto, aprendí y apliqué los fundamentos de estructura y diseño visual.
              </Text>
            </Box>
            <a href='https://github.com/jaironf/Pagina-Web' target='_blank' rel='noopener'>
              <Image src='src/assets/GitHub-Logo.png' w='7vw' mt='3vw' transition='transform 0.3s ease, filter 0.3s ease' suave
                _hover={{ transform: 'scale(1.1)', opacity: 0.8, filter: 'drop-shadow(8px 8px 8px #E7A92D)', }} />
            </a>
          </GridItem>
        </Grid>

        <Grid h='500px' w='500px' templateRows='repeat (1, 1fr)' templateColumns='repeat(6, 1fr)' gap={0}>
          <GridItem className='grid-item' rowSpan={2} colSpan={6} bg='#E7A92D' color='#3F3B37' borderRadius='0 0 50px 0' display='flex' flexDirection='column' alignItems='center' p={4}>
            <Text fontSize='xxl'>
              E-Commerce <span>02</span>
            </Text>
            <Box className='description-body' maxW='80%' mt='5vw'>
              <Text fontSize='15px' fontFamily='sans-serif'>
              Este es un proyecto de aplicación de e-commerce creado con React, enfocado en la venta de videojuegos. La aplicación permite a los usuarios registrarse, iniciar sesión, explorar un catálogo de juegos, añadir productos al carrito y realizar pedidos. Incorporé componentes personalizados como el login de Uiverse.io, mejorando la experiencia del usuario con interfaces modernas y atractivas. Los usuarios pueden acceder a descripciones detalladas de cada título y gestionar sus compras de manera sencilla.
              </Text>
            </Box>
            <a href='https://github.com/jaironf/E-commerceReact' target='_blank' rel='noopener'>
              <Image src='src/assets/GitHub-Logo.png' w='7vw' mt='2vw' transition='transform 0.3s ease, filter 0.3s ease' suave
                _hover={{ transform: 'scale(1.1)', opacity: 0.8, filter: 'drop-shadow(8px 8px 8px #3E3C36)', }} />
            </a>
          </GridItem>
        </Grid>
      </Box>


      <Box className='project-cards'>
        <Grid h='500px' w='770px' templateRows='repeat (3, 1fr)'>
          <GridItem className='grid-item' bg='#DB4C44' color={'#FBF0DF'} borderRadius='0 0 50px 0'>PROJECT <span>03</span></GridItem>
        </Grid>
        <Grid h='500px' w='600px' templateRows='repeat (3, 1fr)'>
          <GridItem className='grid-item' rowSpan={2} bg='#FBF0DF' borderRadius='0 0 50px 0'><Text className='text-projects'>PROJECT <span>04</span></Text></GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects