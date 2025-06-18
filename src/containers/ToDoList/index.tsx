import { useSelector } from 'react-redux'

import Tasks from '../../components/Tasks'
import { Container } from './styles'
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

  return (
    <Container>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filteredTasks().map((t) => (
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
    </Container>
  )
}

export default ToDoList
