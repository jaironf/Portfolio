import React from 'react'
import { Box, Button, Divider, Grid, GridItem, Text } from '@chakra-ui/react'
import './Projects.scss'


const Projects = () => {
  return (
    <Box className='projects-container' id='Projects'>
      <Box className='selected-box'>
        <Text className='selected-title'>S<i>e</i>lec<i>t</i>e<i>d</i></Text>
        <Divider className='divider-body' />
      </Box>
      <Box className='projects-box'>
        <Text className='projects-title'><i>P</i>ro<i>j</i>ec<i>t</i>s</Text>
        <Divider className='divider-body' />
      </Box>

      <Box className='project-cards' flexWrap='wrap' justifyContent='flex-start'>

        <Grid h='500px' w='500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(6, 1fr)' gap={0}>
          <GridItem className='grid-item' rowSpan={2} colSpan={6} bg='#3E3C36' color='#FBF0DF' borderRadius='0 0 50px 0' display='flex' flexDirection='column' alignItems='center' p={4}>
            <Text  className='text-projects' fontSize='xxl'>
              Oddliquor Website <span>01</span>
            </Text>
            <Box className='description-body' maxW='80%' mt='5vw'>
              <Text fontSize='15px' fontFamily='sans-serif'>
                Esta es la primera página web que desarrollé en el bootcamp de Fullstack Development, utilizando solo HTML y CSS. El sitio, diseñado para el artista Oddliquor, cuenta con cuatro secciones: una página principal con una breve introducción, una biografía que destaca su carrera, una galería de imágenes, y una sección de contacto con un formulario. A través de este proyecto, aprendí y apliqué los fundamentos de estructura y diseño visual.
              </Text>
            </Box>
            <a href='https://github.com/jaironf/Pagina-Web' target='_blank' rel='noopener'>
              <Button className='github-btn' bg='#E7A92D' variant='outline' mt='3vw' _hover={{ transform: 'scale(1.1)', opacity: 0.8, filter: 'drop-shadow(8px 8px 8px #E7A92D)', }}> GitHub</Button>
            </a>
          </GridItem>
        </Grid>

        <Grid h='500px' w='500px' templateRows='repeat (1, 1fr)' templateColumns='repeat(6, 1fr)' gap={0}>
          <GridItem className='grid-item' rowSpan={2} colSpan={6} bg='#E7A92D' color='#3F3B37' borderRadius='0 0 50px 0' display='flex' flexDirection='column' alignItems='center' p={4}>
            <Text  className='text-projects' fontSize='xxl'>
              E-Commerce <span>02</span>
            </Text>
            <Box className='description-body' maxW='80%' mt='5vw'>
              <Text fontSize='15px' fontFamily='sans-serif'>
              Este es un proyecto de aplicación de e-commerce creado con React, enfocado en la venta de videojuegos. La aplicación permite a los usuarios registrarse, iniciar sesión, explorar un catálogo de juegos, añadir productos al carrito y realizar pedidos. Incorporé componentes personalizados como el login de Uiverse.io, mejorando la experiencia del usuario con interfaces modernas y atractivas. Los usuarios pueden acceder a descripciones detalladas de cada título y gestionar sus compras de manera sencilla.
              </Text>
            </Box>
            <a href='https://github.com/jaironf/E-commerceReact' target='_blank' rel='noopener'>
            <Button className='github-btn' bg='#3E3C36' color='#E7A92D' variant='outline' mt='3vw' _hover={{ transform: 'scale(1.1)', opacity: 0.8, filter: 'drop-shadow(8px 8px 8px #3E3C36)', }}> GitHub</Button>
            </a>
          </GridItem>
        </Grid>
      </Box>


      <Box className='project-cards' flexWrap='wrap' justifyContent='flex-start'>
        <Grid h='500px' w='770px' templateRows='repeat (1, 1fr)' templateColumns='repeat(6, 1fr)' gap={0}>
          <GridItem className='grid-item' rowSpan={2} colSpan={6} bg='#DB4C44' color={'#FBF0DF'} borderRadius='0 0 50px 0' display='flex' flexDirection='column' alignItems='center'>
            <Text  className='text-projects' fontSize='xxl' mt='20px'>
              Social Network TukTuk <span>03</span>
            </Text>
            <Box className='description-body' maxW='80%' mt='5vw'>
              <Text fontSize='15px' fontFamily='sans-serif'>
              En este proyecto, que he desarrollado en colaboración con mi compañero Manuel Dana, hemos creado una red social utilizando React y Redux. La aplicación permite a los usuarios registrarse, iniciar sesión, crear publicaciones, comentar, dar likes, y más. Utilizamos React Router para la navegación y múltiples componentes que gestionan las distintas funcionalidades de la red social. Los usuarios pueden interactuar entre sí a través de publicaciones, comentarios y likes, y cada usuario tiene un perfil donde puede ver sus datos y sus publicaciones.
              </Text>
            </Box>
            <a href='https://github.com/manudana11/frontend-tuktuk' target='_blank' rel='noopener'>
            <Button className='github-btn' bg='#FBF0DF' color='#DB4C44' variant='outline' mt='3vw' border='1px solid #3E3C36' _hover={{ transform: 'scale(1.1)', opacity: 0.8, filter: 'drop-shadow(8px 8px 8px #FBF0DF)', }}> GitHub</Button>
            </a>
          </GridItem>
        </Grid>


        <Grid h='500px' w='600px' templateRows='repeat (1, 1fr)'
        templateColumns='repeat(6, 1fr)' gap={0}>
          <GridItem className='grid-item4' rowSpan={2} colSpan={6} bg='#FBF0DF' color='#3F3B37' borderRadius='0 0 50px 0' display='flex' flexDirection='column' alignItems='center'>
            <Text className='text-projects' fontSize='xxl' mt='20px'>
              Portfolio <span>04</span>
              </Text>
              <Box className='description-body' maxW='80%' mt='5vw'> 
                <Text fontSize='15px' fontFamily='sans-serif'>
                Este es mi portfolio personal, desarrollado utilizando React como framework principal. Para la creación de componentes, he integrado Chakra UI, lo que me ha permitido construir una interfaz limpia, accesible y altamente personalizable. Además, he utilizado SCSS para aplicar estilos de manera eficiente, gestionando mejor la modularidad y personalización del diseño. En este portfolio, muestro mis proyectos más destacados y habilidades técnicas, brindando una experiencia visual y de navegación optimizada para los visitantes.
                </Text>
              </Box>
              <a href='https://github.com/jaironf/Portfolio' target='_blank' rel='noopener'>
              <Button className='github-btn' bg='#DB4C44' color='#FBF0DF' variant='outline' mt='3vw' border='1px solid #3E3C36' _hover={{ transform: 'scale(1.1)', opacity: 0.8, filter: 'drop-shadow(8px 8px 8px #DB4C44)', }}> GitHub</Button>
            </a>
            </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects