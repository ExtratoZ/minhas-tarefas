import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, SaveButton, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Options, Opcao } from './styles'
import * as enums from '../../utils/enums/TaskEnum'
import Task from '../../models/Task'
import { cadastrar } from '../../store/reducers/Tasks'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    const tarefaAdicionada = new Task(
      titulo,
      descricao,
      enums.Status.PENDENTE,
      prioridade,
      9
    )

    dispatch(cadastrar(tarefaAdicionada))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as={'textarea'}
          placeholder="Descrição da Tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="Prioridade"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default Formulario
