import React from 'react'
import { Box,Button,Checkbox,Input,InputGroup,Link,Text } from '@chakra-ui/react';
function Signup() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' bg={'#0D0E12'}>
    <Text fontSize='22px' fontFamily='Poppins' fontWeight='600px' lineHeight='33px' color='#45AC75'>REGISTER</Text>
    <InputGroup display='grid' placeItems='center' gap={5} marginTop='5' marginBottom={1}>
    <Input bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' placeholder='Username' borderRadius='4px'/>
    <Input bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' placeholder='First Name' borderRadius='4px'/>
    <Input bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' placeholder='Last Name' borderRadius='4px'/>
    <Input bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' type='email' placeholder='Email Address' borderRadius='4px'/>
    <Input bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' type='password' placeholder='Password' borderRadius='4px'/>
    <Input bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' type='password' placeholder='Confirm Password' borderRadius='4px'/>
    </InputGroup>
    {/* <Link ontWeight='500' fontFamily='Poppins' fontSize='16px' lineHeight='24px' color='#B0ADAD' width='80%' textAlign='right'>Forgot Password</Link> */}
    {/* <Checkbox size='md' ontWeight='500' fontFamily='Poppins' fontSize='14px' lineHeight='21px' color='#B0ADAD' width='80%' textAlign='right'>Keep me signed in</Checkbox> */}
    {/* <Text ontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' mt='5' mb='2' color='#B0ADAD' width='80%' textAlign='center'>Don{"'"}t have an account?</Text> */}
    <Button mt='5' mb='5' bg='#45AC75' textAlign='center' w='50%' h='53px' borderRadius='4px' size='18px' lineHeight='27px' color='white' _hover={{color:'#000'}}>Register</Button>
</Box>
  )
}

export default Signup