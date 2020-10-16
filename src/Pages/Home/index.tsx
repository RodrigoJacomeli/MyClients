import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import Navbar from '../../Components/Navbar'

export default function Home() {
  return (
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Navbar />
        </Grid.Row>
        <Grid.Row>
          <Container>
            <Header as='h2' content='Home' />
          </Container>
        </Grid.Row>
      </Grid>
    </Container>
  );
}