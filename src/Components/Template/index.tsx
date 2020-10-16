import React from 'react'
import { Container } from 'semantic-ui-react'

interface Iprops {
  children: JSX.Element | JSX.Element[]
}

export default function Template({ children }: Iprops) {
  return (
    <Container fluid>
      {children}
    </Container>
  )
}



