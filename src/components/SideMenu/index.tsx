import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Container } from './styles';

const SideMenu: React.FC = () => {

  return (
    <Container>
      <Router>
        <List divided relaxed>
          <List.Item as='a'>
            <Link to='/'>
              <Button fluid primary icon='home'>
                Inicio
              </Button>
            </Link>
          </List.Item>
          <List.Item as='a'>
            <Link to='/cliente'>
              <Button fluid secondary icon='address book'>
                Clientes
              </Button>
            </Link>
          </List.Item>
        </List>
      </Router>
    </Container>
  );
}

export default SideMenu;