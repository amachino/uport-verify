/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Absolute from 'atoms/Absolute'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Link from 'atoms/Link'

import DrawerOpen from 'containers/drawer/DrawerOpen'
import MenuPopoverAssimilation from 'components/menus/MenuPopoverAssimilation'
import MenuPopoverFeatures from 'components/menus/MenuPopoverFeatures'
import MenuPopoverInterface from 'components/menus/MenuPopoverInterface'
import MenuPopoverSmartContracts from 'components/menus/MenuPopoverSmartContracts'
import MenuPopoverTrustManager from 'components/menus/MenuPopoverTrustManager'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
  <Absolute
    bottom
    top
    left
    height={1}
    w={[1,0.1]}
  >
  
  </Absolute>
  <Box w={[1]}>
    <Flex
    direction={['column', 'row']} align={"stretch"} justify="center"
    bs={[3]} 
    color={['charcoal']}
    pos='relative'
    >
      <Flex align="center" justify="left" w={[1, 1, 0.1]} pl={[15]} py={[7]} direction={['row']} >
        <Link to="/">
          <Heading color={'white'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>uPort Verify</Heading>
        </Link>
      </Flex>
      
      <Flex align="center" justify="center" display={['none', 'none', 'Flex']} color="white" py={[15]} w={[1, 1, 0.70]}>
        <Flex align="center" justify="space-evenly" display={['none', 'none', 'Flex']} color="white" py={[15]} w={[1, 1, 0.30]}>
          <Link to="/verify/email">Email</Link>
          <Link to="/verify/twitter">Twitter</Link>
          <Link to="/verify/github">GitHub</Link>
        </Flex>
      </Flex>

      <Flex align="center" justify='center' py={[10]} color='white' w={[1, 1, 0.1]} textAlign="center">
        <DrawerOpen>
          <Heading f={[2]} level={[4]} fw={300} ><a>menu</a></Heading>
        </DrawerOpen>
      </Flex>
    
  </Flex>
  </Box>


</Flex>