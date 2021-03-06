import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Menu, Header, Button, Icon } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <Container fluid>
        <Menu inverted>
          <Menu.Item>
          <Header as='h3' content='MyClients' inverted style={{ marginLeft: 10}}/>
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
    </Container>
  )
}