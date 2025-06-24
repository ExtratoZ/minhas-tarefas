import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/TaskEnum'
import { remove, add, alteraStatus } from '../../store/reducers/Tasks'
import Task from '../../models/Task'
import { Button, SaveButton } from '../../styles'

type Props = Task

const Tasks = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoEditada, setDescricaoEditada] = useState(descricao)

  useEffect(() => {
    if (descricao.length > 0) {
      setDescricaoEditada(descricao)
    }
  }, [descricao])

  function editCancel() {
    setEstaEditando(false)
    setDescricaoEditada(descricao)
  }

  function alteraStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: e.target.checked }))
  }

  return (
    <S.CardTask>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Title>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Title>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!estaEditando}
        value={descricaoEditada}
        placeholder="Descrição da tarefa"
        onChange={(e) => setDescricaoEditada(e.target.value)}
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  add({
                    id,
                    descricao: descricaoEditada,
                    titulo,
                    prioridade,
                    status
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelButton
              onClick={() => {
                editCancel()
              }}
            >
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Excluir
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.CardTask>
  )
}

export default Tasks
