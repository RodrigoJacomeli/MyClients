import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import { Container } from './styles';

const SideMenu: React.FC<Component> = () => {
  
  state = { activeItem: 'Home' }
  
  handleItemClick = (e, { name }) => this.setState({activeItem: name})
  
  return (
    <Container>
      <Menu pointing secondary vertical>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          />
      </Menu>
    </Container>
  );
}

export default Menu;