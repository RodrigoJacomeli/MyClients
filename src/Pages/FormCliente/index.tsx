import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Navbar from '../../Components/Navbar'
import HeaderPage from '../../Components/HeaderPage'
import FormClient from '../../Components/FormClient'

export default function FormCliente() {
  return (
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Navbar />
        </Grid.Row>
        <Grid.Row>
          <Container>
            <HeaderPage />
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <FormClient />
          </Container>
        </Grid.Row>
      </Grid>
    </Container>
  )
}