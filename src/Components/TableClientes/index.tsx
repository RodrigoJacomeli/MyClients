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

  /*   function cpfMask(cpf) {
      return cpf
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '1.2')
        .replace(/(\d{3})(\d)/, '1.2')
        .replace(/(\d{3})(\d{1,2})/, '1-2')
        .replace(/(-\d{2})\d+?/, '1')
    } */

  return (
    <>
      <Table size='small' singleLine>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>CPF</Table.HeaderCell>
            <Table.HeaderCell>Telefone</Table.HeaderCell>
            <Table.HeaderCell>CEP</Table.HeaderCell>
            <Table.HeaderCell>Cidade</Table.HeaderCell>
            <Table.HeaderCell>Bairro</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {clientes.map(cliente => (
            <Table.Row textAlign='center' key={cliente._id}>
              <Table.Cell content={cliente.nome.toLowerCase()} />
              <Table.Cell content={cliente.cpf} />
              <Table.Cell content={cliente.telefone} />
              <Table.Cell content={cliente.endereco.cep} />
              <Table.Cell content={cliente.endereco.cidade.toLowerCase()} />
              <Table.Cell content={cliente.endereco.bairro.toLowerCase()} />
              <Table.Cell content={cliente.endereco.estado.toLowerCase()} />
              <Table.Cell content={
                <>
                  <Button color='blue' circular size='small' icon='search' title='Exibir mais informações' to={`/cliente/${cliente._id}`} as={Link} />
                  <Button color='yellow' circular size='small' icon='edit' title='Editar informações do cliente' to={`/cliente/${cliente._id}`} as={Link} />
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