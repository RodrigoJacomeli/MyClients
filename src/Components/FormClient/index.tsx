import React, { FormEvent, useState, useEffect } from 'react'
import { Container, Segment, Form, Header } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

import api from '../../service/api'

import { Icliente, IclienteOpcional } from '../../interfaces/cliente'
import { AxiosResponse } from 'axios'

interface Ichange {
    name: string
    value: string | number | boolean
}

interface Iparams {
    _id?: string
}

const defaultValues = {
    nome: '',
    cpf: '',
    telefone: '',
    cadastroAtivo: true,
    endereco: {
        complemento: ''
    }
}

export default function FormClient() {

    const { _id } = useParams<Iparams>()

    const [values, setValues] = useState<IclienteOpcional>({
        ...defaultValues,
        _id
    })

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!_id) return

        setLoading(true)

        api
            .get<Icliente, AxiosResponse<Icliente>>(`/cliente/${_id}`)
            .then(response => setValues(response.data))
            .catch(e => {
                console.log(e)
                alert('Error ao buscar dados do cliente')
            })
            .finally(() => setLoading(false))
    }, [_id])

    function handleChange({ name, value }: Ichange) {
        setValues({ ...values, [name]: value })
        console.log({ ...values, [name]: value })
    }

    function handleSubmit(evt: FormEvent) {
        evt.preventDefault()
        setLoading(true)

        const method = _id ? 'PUT' : 'POST'
        const url = _id ? `/cliente/${_id}` : '/cliente'

        api({
            url,
            method,
            data: values
        })
            .then(() => alert('Sucesso !'))
            .catch(e => {
                console.log(e)
                alert('Houve um erro durante o cadastro !')
                console.log(values)
            })
            .finally(() => setLoading(false))
    }

    return (
        <Container>
            <Segment raised>
                <Form onSubmit={handleSubmit}>
                    <Header as='h4' content='Dados Pessoais' />
                    <Form.Input fluid label='Nome' name='nome' type='text' place='Luiz Antonio da Silva' required value={values.nome} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={1} />
                    <Form.Group widths='3'>
                        <Form.Input fluid label='CPF' name='cpf' type='text' placeholder='000.000.000-00' required value={values.cpf} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={2} width={3}/>
                        <Form.Input fluid type='fone' label='Telefone' name='telefone' placeholder='(00) 0000-0000' value={values.telefone} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={4} width={3}/>
                    </Form.Group>
                    <Header as='h4' content='Endereço' />
                    <Form.Group widths='4'>
                        <Form.Input fluid label='CEP' id='endereco' type='text' name='cep' placeholder='00000-000' required width='2' value={values.endereco.cep} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={5} />
                        <Form.Input fluid label='Logradouro' name='logradouro' type='text' placeholder='Ex: Rua Dona Aparecida' required width='8' value={values.endereco.logradouro} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={6} />
                        <Form.Input fluid label='Número' name='numero' placeholder='000' type='text' required width='2' value={values.endereco.numero} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={7} />
                        <Form.Input fluid label='Complemento' name='complemento' type='text' placeholder='Ex: Casa / Bloco 00 Ap 000' width='4' value={values.endereco.complemento} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={8} />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Bairro' name='bairro' type='text' placeholder='Ex: Tatuape' required value={values.endereco.bairro} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={9} />
                        <Form.Input fluid label='Cidade' name='cidade' type='text' placeholder='Ex: São Paulo' required value={values.endereco.cidade} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={10} />
                        <Form.Input fluid label='Estado' name='estado' type='text' placeholder='Ex: São Paulo' required value={values.endereco.estado} onChange={(_, { name, value }) => handleChange({ name, value })} tabIndex={11} />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Cadastro Ativo :</label>
                        <Form.Radio label='Ativo' name='cadastroAtivo' checked={values.cadastroAtivo} onChange={() => handleChange({ name: 'cadastroAtivo', value: true })} />
                        <Form.Radio label='Desativado' name='cadastroAtivo' checked={!values.cadastroAtivo} onChange={() => handleChange({ name: 'cadastroAtivo', value: false })}></Form.Radio>
                    </Form.Group>
                    <Form.Group>
                        <Form.Button fluid size='big' floated='right' color='green' icon='check' content='Salvar' tabIndex={12} loading={loading} type='submit' />
                    </Form.Group>
                </Form>
            </Segment>
        </Container>
    )
}