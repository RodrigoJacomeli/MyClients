export interface Icliente {
  _id: string
  nome: string
  cpf: string
  telefone: string
  cadastroAtivo: boolean
  endereco: {
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
  }
}

export interface IclienteOpcional {
  _id?: string
  nome?: string
  cpf?: string
  telefone?: string
  cadastroAtivo?: boolean
  endereco: {
    cep?: string
    logradouro?: string
    numero?: string
    complemento?: string
    bairro?: string
    cidade?: string
    estado?: string
  }
}

export interface ICadastroCliente {
  nome: string
  cpf: string
  telefone: string
  cadastroAtivo: boolean
  endereco: {
    cep: string
    logradouro: string
    numero: string
    complemento: string
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