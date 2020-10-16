import React from 'react'

import { Link } from 'react-router-dom'

import { Table, Button } from 'semantic-ui-react'

import { Icliente } from '../../interfaces/cliente'

interface IProps {
  clientes: Icliente[]
  deleteCliente: (_id: string) => Promise<any>
}

export default function TableClientes({ clientes, deleteCliente }: IProps) {

  function handleDeleteClick(clientes: Icliente): void {
    const msg = `Tem certeza que deseja exluir ${clientes.nome}?`
    const response = window.confirm(msg)

    if (response) {
      deleteCliente(clientes._id)
    }
  }

  return (
    <>
      <Table size='small' singleLine>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Tel</Table.HeaderCell>
            <Table.HeaderCell>CEP</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {clientes.map(cliente => (
            <Table.Row textAlign='center'>
              <Table.Cell content={cliente._id} />
              <Table.Cell content={cliente.nome} />
              <Table.Cell content={cliente.telefone} />
              <Table.Cell content={cliente.endereco.cep} />
              <Table.Cell content={
                <>
                  <Button color='blue' circular size='small' icon='search' title='Exibir mais informações' to={`/cliente/form/${cliente._id}`} as={Link} />
                  <Button color='yellow' circular size='small' icon='edit' title='Editar informações do cliente' to={`/cliente/form/${cliente._id}`} as={Link} />
                  <Button color='red' circular size='small' icon='delete' title='Remover cliente da lista' onClick={() => handleDeleteClick(cliente)} />
                </>
              }
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}