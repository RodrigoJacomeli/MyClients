import React, { Children } from 'react';

import { Container } from './styles';

interface Iprops {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Iprops) {
  return (
    <Container>{children}</Container>
  );
}