import React from 'react'
import {Box, Heading,Grid,GridItem,Link, MenuItem, Image, Text} from '@chakra-ui/react';
import profiledemo from '../../assets/profiledemo.PNG'
function Userprofile() {
  return (
    <Box bg="#0D0E12" color='#fff' w={'100vw'}>
        <Grid placeItems='center'  w={'100vw'} gap='5' templateColumns='repeat(2,1fr)'>
            <GridItem colSpan='2' >
                <Grid w='80%'  templateColumns='repeat(3,1fr)' templateRows='repeat(2,1fr)'>
                    <GridItem rowSpan='2' w='max-content' colSpan='1'><Image h='74px' w='74px' borderRadius='50%' src={profiledemo}/></GridItem>
                    <GridItem rowSpan='1' w='max-content' colSpan='2' alignSelf='self-end'>Kelvin_Chiboy</GridItem>
                    <GridItem rowSpan='1' w='max-content' colSpan='2' color='#848484'>UNIQUE ID: 2FSK32gxsJYH6D3ew</GridItem>
                </Grid>
                
            </GridItem>
            <GridItem w='80%' colSpan='2'  >
                <Box  display='flex' gap={5} >
                        <Text fontSize='1.2rem'>Token Submitted:</Text>
                        <Box bg='#111621' display='grid' border='1px solid #45AC75' h='30px' w='30px' borderRadius='1px' placeContent='center'><Text fontSize='1.1rem' >3</Text> </Box>
                 </Box>
             </GridItem>
             <GridItem colSpan='2' placeItems='center' display='grid' h='53px' w='80%'  fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>View Submitted Token</GridItem>
             <GridItem colSpan='2' placeItems='center' display='grid' h='53px' w='80%'  fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>Submit Token</GridItem>
             <GridItem colSpan='2' placeItems='center' display='grid' h='53px' w='80%'  fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>My watchlist</GridItem>
             <GridItem colSpan='2' placeItems='center' display='grid' h='53px' w='80%'  fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>Account Subsciption</GridItem>
             <GridItem colSpan='2' placeItems='center' display='grid' h='53px' w='80%'  fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>KYC</GridItem>
             <GridItem colSpan='2' w='80%'>
                 <Grid templateColumns='repeat(2,1fr)' w='100%' gap={5}>
                 <GridItem  colSpan='1' mb='5'  placeItems='center' display='grid' h='53px'    fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>Change Username</GridItem>
                <GridItem colSpan='1' mb='5' placeItems='center' display='grid' h='53px'   fontSize='1rem' fontWeight='500' lineHeight='27px' bg='#111621' borderRadius='4px'>Change Password</GridItem>
                 </Grid>
             </GridItem>
            
        </Grid>

    </Box>
  )
}

export default Userprofile