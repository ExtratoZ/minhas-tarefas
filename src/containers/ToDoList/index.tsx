import { useSelector } from 'react-redux'

import Tasks from '../../components/Tasks'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filteredTasks = () => {
    let filterTask = itens
    if (termo) {
      filterTask = filterTask.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        filterTask = filterTask.filter((item) => item.prioridade === valor)
      } else if (criterio === 'status') {
        filterTask = filterTask.filter((item) => item.status === valor)
      }

      return filterTask
    } else {
      return itens
    }
  }

  const showResult = (qtd: number) => {
    let message = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e ${termo}` : ''
    if (criterio === 'todas') {
      message = `${qtd} tarefa(s) encontrada(s) como todas
        ${complemento}`
    } else {
      message = `${qtd} mensagen(s) encontrada(s) como ${valor} ${complemento}`
    }
    return message
  }

  const qtdTask = filteredTasks()
  const message = showResult(qtdTask.length)

  return (
    <MainContainer>
      <Titulo as={'p'}>{message}</Titulo>
      <ul>
        {qtdTask.map((t) => (
          <li key={t.titulo}>
            <Tasks
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ToDoList
