/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'

import Resources from 'components/sections/FrontResources'
import EnsScan from 'features/EnsScan'
import MeetupEvent from 'features/MeetupEvent'
import DialogOpen from 'containers/dialog/DialogOpen'

import VerifyEmail from 'features/VerifyEmail'
import VerifyTwitter from 'features/VerifyTwitter'
import VerifyGithub from 'features/VerifyGithub'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center' py={50} >

    <Container my={25} w={[560]} ta="center" >
      <Heading f={[5,6]}>
        Verify A Decentralized Identity
      </Heading>
      <Paragraph f={[1]}>
        Add reputation and trust to a decentralized identity. The uPort Verify Application demonstrates Issuer attestations for Email, Twitter and Github.
      </Paragraph>
    </Container>

    <Container w={[720]} >
      <Box p={40} gradient="purple" color="white" boxShadow={3} >
        <VerifyEmail/>
      </Box>
      <Box p={40} bg="twitter" color="white" boxShadow={3} mt={100} >
        <VerifyTwitter/>
      </Box>
      <Box p={40} bg="github" color="white" boxShadow={3} mt={100}>
        <VerifyGithub/>
      </Box>
    </Container>
      
</Box>