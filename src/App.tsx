import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './components/styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes';

export default function App() {
  return (
    <Layout>
      <Routes />
      <GlobalStyles />
    </Layout>
  );
}