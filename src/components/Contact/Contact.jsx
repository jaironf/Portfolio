import React from 'react'
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/react'
import './Contact.scss'

const Contact = () => {
    return (
        <Box className='contact-container'>
            <Box className='title-contact-nav'>
                <Text><i>C</i>on<i>t</i>act</Text>
                <Divider className='divider' />
            </Box>
            <Box className='contact-body'>
                <Grid className='contact-zone' w='1250px' h='1000px' bg='#3F3B37' mt='40px' borderRadius='10px'>
                    <Grid className='git-card' w='400px' h='500px' border='1px solid #FBF0DF' borderRadius='0 0 20px 0' mt='30px' ml='30px'>
                        <Text ml='10px' mt='10px' display='flex' color='#FBF0DF'>Gmail</Text>

                        <Box className='carousel-container' overflow='hidden' w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>

                            <Text className='email-carousel' fontSize='150px' display='flex' justifyContent='center' alignItems='center' color='#FBF0DF' fontFamily='sans-serif'>Email </Text>

                        </Box>

                        <Text ml='10px' mb='20px' display='flex' justifyContent='initial' alignItems='end' fontSize='20px' color='#FBF0DF'>jaironf.94@gmail.com</Text>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Contact