import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function HeaderPage() {
  return (
    <>
      <Grid columns='1'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' content='Todos Clientes' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns='2'>
        <Grid.Row>
          <Grid.Column>
            <Button secondary circular icon='arrow left' title='Voltar a página' as={Link} to='/' />
          </Grid.Column>
          <Grid.Column>
            <Button color='blue' circular icon='add' title='Adicionar novo cliente' content='Novo Cliente' floated='right' as={Link} to='/cliente/form' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}