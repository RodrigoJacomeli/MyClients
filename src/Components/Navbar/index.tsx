import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import { Container, Menu, Header, Button, Icon } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <Container fluid>
      <Router>
        <Menu inverted>
          <Menu.Item>
            <Header as='h3' content='MyClients' inverted />
          </Menu.Item>
          <Menu.Item>
            <Button fluid primary title='Ir para Home' as={Link} to='/'>
              <Icon name='home' />
              Home
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button fluid secondary title='Ir para clientes' as={Link} to='/cliente'>
              <Icon name='address book' />
              Clientes
            </Button>
          </Menu.Item>
        </Menu>
      </Router>
    </Container>
  )
}