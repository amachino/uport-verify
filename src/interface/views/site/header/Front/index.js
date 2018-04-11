/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box,
  Button, Container, Heading, Image, Paragraph, Section,
} from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]}color='white' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']}  mh={['40vh']} align='center' justify={['center']} >
      <Box w={[1]} color="white" ta="center" >
      <Heading level={[3]} f={[4,5]}mb={25} ta='center' >
        Building The Web of Trust
      </Heading>
      <Paragraph f={[1]}>
        Connect a decentralized uPort identity to Email, Twitter and Github.
      </Paragraph>
      </Box>
    </Flex>
  </Container>
</Section>
