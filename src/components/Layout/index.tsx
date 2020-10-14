import React from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from '../Navbar';

interface Iprops {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC = () => {
  return (
    <Container fluid>
      <Navbar />
    </Container>
    <Container>
      {children}
    </Container>
  );
}

export default Layout;