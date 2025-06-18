import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remove, add } from '../../store/reducers/Tasks'
import Task from '../../models/Task'

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

  return (
    <S.CardTask>
      <S.Title>{titulo}</S.Title>
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
            <S.SaveButton
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
            </S.SaveButton>
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
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
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
