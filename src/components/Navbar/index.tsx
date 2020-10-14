import React from 'react';

//import { Container } from './styles';
import { Container, Header, Button, Grid} from 'semantic-ui-react';

const Navbar: React.FC = () => {
  return (
    <Container fluid>
      <Grid columns={4} relaxed='very'>
        <Grid.Column>
          <Header as='h1' content='My Clients - App' color='grey'></Header>
        </Grid.Column>
        <Grid.Column>
          <Button.Group>
            <Button primary content='Home'></Button>
            <Button secondary content='Clientes'></Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Navbar;