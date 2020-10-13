import React from 'react';

import { Container } from './styles';
import { Header } from 'semantic-ui-react';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Header as='h1' content='My Clients - App' color='grey'></Header>
    </Container>
  );
}

export default Navbar;