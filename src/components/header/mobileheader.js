import React from 'react'
import { Menu, MenuButton, MenuList,Box, Heading,IconButton,Grid,GridItem,Link, MenuItem, Image} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import { Outlet, Link as Routerlink} from "react-router-dom";
import alogopotlogo from '../../assets/ALGOPOT.svg'
export function Mobileheader(){
    const [isLargerThan1280] = useMediaQuery('(min-width: 700px)')
    return (
        <>
                <Link as={Routerlink}  to='/'><Image src={alogopotlogo}/></Link>
                <Menu>
                {({ isOpen }) => (
                   <> <MenuButton 
                     as={IconButton}
                     aria-label='navigations'
                     icon={isOpen?<CloseIcon /> :<HamburgerIcon color={'#FFFFFF'}  borderColor={'#45AC75'}/>}
                     variant='outline'
                     border={'0px'}
                    />
                    <MenuList width={'100vw'} bg={"#0A0B0E"} border={'0px'}>
                    <Grid
                     h='200px'
                    //  width={'90%'}
                    templateRows='repeat(4, 1fr)'
                     templateColumns='repeat(2, 1fr)'
                     gap={4}
                     padding={2}
                    >
                         <MenuItem as={GridItem} borderRadius={4} colSpan={2} w='100%' color={'#ffffff'} background='#111621'  placeContent='center' _hover={{cursor:'pointer',bg:'#111621'}}>List Your Token</MenuItem>
                         <MenuItem as={GridItem} borderRadius={4} colSpan={2} w='100%' color={'#ffffff'} bg='#111621' placeContent='center' _hover={{cursor:'pointer',bg:'#111621'}}><Link as={Routerlink}  to='/watchlist'>Watchlist</Link></MenuItem>
                        <MenuItem as={GridItem} borderRadius={4} colSpan={1} w='100%' color={'#ffffff'} bg='#111621' placeContent='center'_hover={{cursor:'pointer',bg:'#111621'}}><Link as={Routerlink}  to='/login'>Login</Link></MenuItem>
                        <MenuItem as={GridItem} borderRadius={4} colSpan={1} w='100%' color={'#ffffff'} bg='#111621' placeContent='center' _hover={{cursor:'pointer',bg:'#111621'}}><Link as={Routerlink}  to='/signup'>Sign-Up</Link></MenuItem>
                    </Grid>
                    </MenuList>
                    <Outlet />
                    </>
                    )}
                </Menu>
                </>  
    )
}