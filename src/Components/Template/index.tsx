import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from '../Navbar'

interface Iprops {
  children: JSX.Element | JSX.Element[]
}

export default function Template({ children }: Iprops) {
  return (
    <>
      <Navbar />
      <Container fluid>
        {children}
      </Container>
    </>
  )
}



