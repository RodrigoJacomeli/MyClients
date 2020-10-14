import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

//import { Container } from './styles';
import { Container, Header, Menu, Segment, Button, Icon } from 'semantic-ui-react';

const Navbar: React.FC = () => {
  return (
    <Router>
      <Container fluid>
        <Segment inverted>
          <Menu inverted>
            <Menu.Item>
              <Header
                as='h2'
                content='My Clients - App'
                color='grey' />
            </Menu.Item>
            <Menu.Item>
              <Link to='/'>
                <Button
                  fluid
                  primary
                  content='Home' >
                  <Icon name='home'/>
                  Home
              </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/cliente'>
                <Button
                  fluid
                  primary >
                  <Icon name='address book'/>
                  Clientes
              </Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Segment>
      </Container>
    </Router>
  );
}

export default Navbar;