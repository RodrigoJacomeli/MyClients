import React, { Children } from 'react';
import Navbar from '../Navbar';
import Menu from '../SideMenu';

import { Container, LeftSide, RightSide } from './styles';

interface Iprops {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Iprops) {
  return (
    <Container>
      <Navbar />
      <LeftSide>
        <Menu></Menu>
      </LeftSide>
      <RightSide>
        {children}
      </RightSide>
    </Container>
  );
}