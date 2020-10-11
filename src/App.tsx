import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { List } from 'semantic-ui-react';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <List>
            <List.Item>
              <Link to="/">Home</Link>
            </List.Item>
            <List.Item>
              <Link to="/ListAllClients">List All Clients</Link>
            </List.Item>
            <List.Item>
              <Link to="/ListOneClient">List One Client</Link>
            </List.Item>
            <List.Item>
              <Link to="/AddClient">Add Client</Link>
            </List.Item>
            <List.Item>
              <Link to="/EditClient">Edit Client</Link>
            </List.Item>
            <List.Item>
              <Link to="/RemoveClient">Remove Client</Link>
            </List.Item>
          </List>
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