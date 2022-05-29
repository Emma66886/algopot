import React from 'react'
import { Menu, MenuButton, MenuList,Box, Heading,IconButton,Grid,GridItem,Link, MenuItem, Image} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import { Outlet, Link as Routerlink} from "react-router-dom";
import alogopotlogo from '../../assets/ALGOPOT.svg'
export function Desktopheader(){
    return (
        <Box mr={10} ml={10} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' w='100vw'> 
             <Link as={Routerlink}  to='/'><Image src={alogopotlogo}/></Link>
                  <Box display='flex' flexDirection='row' gap={5} alignItems='center'> 
                         <Link fontSize='1.2rem' colSpan={2}  color={'#ffffff'}   placeContent='center' _hover={{cursor:'pointer',bg:'#111621'}}>List Your Token</Link>
                         <Link  fontSize='1.2rem' colSpan={2}  color={'#ffffff'}  placeContent='center' _hover={{cursor:'pointer',bg:'#111621'}} as={Routerlink}  to='/watchlist'>Watchlist</Link>
                        <Link fontSize='1.2rem' colSpan={1}  color={'#45AC75'}  placeContent='center'_hover={{cursor:'pointer',bg:'#111621'}} as={Routerlink}  to='/login'>login</Link>
                        <Link fontSize='1.2rem' colSpan={1}  color={'#45AC75'}  placeContent='center' _hover={{cursor:'pointer',bg:'#111621'}}  as={Routerlink}  to='/signup'>Sign-Up</Link>
                    <Outlet />
                    </Box>   
                </Box>  
    )
}