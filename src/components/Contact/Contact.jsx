import React from 'react'
import { Box, Button, Divider, Grid, Text } from '@chakra-ui/react'
import './Contact.scss'


const Contact = () => {
    return (
        <Box className='contact-container' id='Contact'>
            <Box className='title-contact-nav'>
                <Text><i>C</i>on<i>t</i>act</Text>
                <Divider className='divider' />
            </Box>
            <Box className='contact-body'>
                <Grid className='contact-zone' w='1250px' h='1000px' bg='#3F3B37' mt='40px' borderRadius='10px' display='flex'>

                    <Grid className='email-card' w='400px' h='500px' border='1px solid #FBF0DF' borderRadius='0 0 20px 0' mt='30px' ml='30px'>
                        <Text ml='10px' mt='10px' display='flex' color='#FBF0DF'>Gmail</Text>

                        <a href='mailto:jaironf.94@gmail.com' style={{ color: '#FBF0DF' }}>
                            <Box className='carousel-container' overflow='hidden' w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>

                                <Text className='email-carousel' fontSize='150px' display='flex' justifyContent='center' alignItems='center' color='#FBF0DF' fontFamily='sans-serif'>Email </Text>

                            </Box>
                        </a>

                        <Text ml='10px' mb='20px' display='flex' justifyContent='initial' alignItems='end' fontSize='20px' color='#FBF0DF'>jaironf.94@gmail.com</Text>
                    </Grid>

                    <Grid className='git-card' w='500px' h='300px' border='1px solid #FBF0DF' borderRadius='0 0 20px 0' mt='15.6vw'>
                        <Text ml='10px' mt='10px' display='flex' color='#FBF0DF'>Github</Text>

                        <a href='https://github.com/jaironf' target='_blank' rel='noopener noreferrer'>
                            <Box className='carousel-container' overflow='hidden' w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>

                                <Text className='git-carousel' fontSize='150px' display='flex' justifyContent='center' alignItems='center' color='#FBF0DF' fontFamily='sans-serif'>GitHub</Text>

                            </Box>
                        </a>
                        <Text ml='10px' mb='20px' display='flex' justifyContent='initial' alignItems='end' fontSize='20px' color='#FBF0DF'>@jaironf</Text>
                    </Grid>


                </Grid>

                <Grid className='linkedin-card' w='700px' h='400px' border='1px solid #FBF0DF' borderRadius='0 0 20px 0' mt='-32vw' ml='2vw'>
                    <Text ml='10px' mt='10px' display='flex' color='#FBF0DF'>LinkedIn</Text>

                    <a href='https://www.linkedin.com/in/jairo-n%C3%BA%C3%B1ez-fern%C3%A1ndez-809911210/' target='_blank' rel='noopener noreferrer'>
                        <Box className='carousel-container' overflow='hidden' w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>
                            <Text className='linkedin-carousel' fontSize='150px' display='flex' justifyContent='center' alignItems='center' color='#FBF0DF' fontFamily='sans-serif'>LinkedIn</Text>
                        </Box>
                    </a>

                    <Text ml='10px' mb='20px' display='flex' justifyContent='initial' alignItems='end' fontSize='20px' color='#FBF0DF'>www.linkedin.com/in/jaironufer</Text>
                </Grid>

                <Box display='flex' justifyContent='end' mr='50px'>
                    <Button className='btn-top' color='#FBF0DF' variant='outline' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Top
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact