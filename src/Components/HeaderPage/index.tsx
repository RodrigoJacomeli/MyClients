import React from 'react'
import { Grid, Header, Button, Divider } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

export default function HeaderPage() {

  const location = useLocation()

  return (
    <>
      <Grid columns='1'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' content={location.pathname === '/cliente/form' ? 'Formulario de Cadastro' : 'Todos Clientes'} />
            <Divider />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns='2'>
        <Grid.Row>
          <Grid.Column>
            <Button secondary circular icon='arrow left' title='Voltar a página' as={Link} to={location.pathname === `/cliente/form` ? '/cliente' : '/'} />
          </Grid.Column>
          <Grid.Column>
            {location.pathname === '/cliente/form' ? '' : <Button color='blue' circular icon='add' title='Adicionar novo cliente' content='Novo Cliente' floated='right' as={Link} to='/cliente/form' />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}