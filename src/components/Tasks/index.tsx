import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tasks = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.CardTask>
      <S.Title>{titulo}</S.Title>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={descricao} placeholder="Descrição da tarefa" />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setEstaEditando(false)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.Button>Excluir</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.CardTask>
  )
}

export default Tasks
