import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cliente from './pages/Cliente';
import FormCliente from './pages/FormCliente';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cliente" exact component={Cliente} />
        <Route path="/cliente/form" exact component={FormCliente} />
        <Route path="/cliente/form/:_id" exact component={FormCliente} />
      </Switch>
    </Router>
  )
}