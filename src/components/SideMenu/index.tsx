import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Container } from './styles';

const SideMenu: React.FC = () => {

  return (
    <Container>
      <List divided relaxed>
        <List.Item as='a'>
          <Button secondary>
            <Router>
              <Link to='/'>Home</Link>
            </Router>
          </Button>
        </List.Item>
        <List.Item as='a'>
          <Button secondary>
            <Router>
              <Link to='/'>Clientes</Link>
            </Router>
          </Button>
        </List.Item>
      </List>
    </Container>
  );
}

export default SideMenu;