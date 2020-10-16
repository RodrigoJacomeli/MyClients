export interface Icliente {
  _id: string
  nome: string
  cpf: string
  dataNascimento: string
  telefone: string
  endereco: {
    cep: string
    logradouro: string
    number: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
  }
}

export interface ICadastroCliente {
  _id: string
  nome: string
  cpf: string
  dataNascimento?: string
  telefone?: string
  endereco: {
    cep: string
    logradouro: string
    number: string
    complemento?: string
    bairro: string
    cidade: string
    estado: string
  }
}

export interface IDeleteClienteResponse {
  n: number
  ok: number
  deletedCount: number
}