import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { AxiosResponse } from 'axios'

import { Icliente, IDeleteClienteResponse } from '../../interfaces/cliente'

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
    <Container>
      <HeaderPage />
      <TableCliente clientes={clientes} deleteCliente={deleteCliente} />
    </Container>
  )
}