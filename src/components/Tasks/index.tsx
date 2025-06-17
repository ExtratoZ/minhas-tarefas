import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/TaskEnum'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tasks = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.CardTask>
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={descricao} placeholder="Descrição da tarefa" />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelButton onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.CancelButton>Excluir</S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.CardTask>
  )
}

export default Tasks
