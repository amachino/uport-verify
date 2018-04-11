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
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center' py={120}>
  <Container w={[780]} >
    <Heading f={[4,5]}>
      About
    </Heading>
    <Paragraph f={[1]}>
      Building a collection of uPort attestation verification services for the world to use.
    </Paragraph>
  </Container>
</Box>