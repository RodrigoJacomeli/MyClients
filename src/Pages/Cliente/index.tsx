import React, { useState, useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'

//import { Link } from 'react-router-dom'
import { AxiosResponse } from 'axios'

import { Icliente, IDeleteClienteResponse } from '../../interfaces/cliente'

import Navbar from '../../Components/Navbar'
import HeaderPage from '../../Components/HeaderPage'
import TableCliente from '../../Components/TableClientes'

import api from '../../service/api'

export default function Cliente() {

  const [clientes, setClientes] = useState<Icliente[]>([])

  function getClientes() {
    api
      .get<Icliente[], AxiosResponse<Icliente[]>>('/cliente')
      .then(response => setClientes(response.data))
      .catch(e => {
        console.log(e)
        alert(e.message)
      })
  }

  async function deleteCliente(_id: string): Promise<void> {
    api
      .delete<IDeleteClienteResponse, AxiosResponse<IDeleteClienteResponse>>(
        `/cliente/${_id}`
      )
      .then(response => {
        if (response.data.n < 1) {
          throw new Error('')
        }
        setClientes(clientes.filter(cliente => cliente._id !== _id))
      })
      .catch(e => {
        console.log(e)
        alert('Cliente não foi removido !')
      })
  }

  useEffect(() => {
    getClientes()
  }, [])

  return (
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Navbar />
        </Grid.Row>
        <Grid.Row>
          <Container>
            <HeaderPage />
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <TableCliente clientes={clientes} deleteCliente={deleteCliente} />
          </Container>
        </Grid.Row>
      </Grid>
    </Container>
  )
}