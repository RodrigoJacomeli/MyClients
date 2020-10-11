import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListAllClients">List All Clients</Link>
            </li>
            <li>
              <Link to="/ListOneClient">List One Client</Link>
            </li>
            <li>
              <Link to="/AddClient">Add Client</Link>
            </li>
            <li>
              <Link to="/EditClient">Edit Client</Link>
            </li>
            <li>
              <Link to="/RemoveClient">Remove Client</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/RemoveClient">
            <RemoveClient />
          </Route>
          <Route path="/EditClient">
            <EditClient />
          </Route>
          <Route path="/AddClient">
            <AddClient />
          </Route>
          <Route path="/ListOneClient">
            <ListOneClient />
          </Route>
          <Route path="/ListAllClients">
            <ListAllClients />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function ListAllClients() {
  return <h2>List All Clients</h2>
}

function ListOneClient() {
  return <h2>List One Client</h2>
}

function AddClient() {
  return <h2>Add Client</h2>
}

function EditClient() {
  return <h2>Edit Client</h2>
}

function RemoveClient() {
  return <h2>Remove Client</h2>
}