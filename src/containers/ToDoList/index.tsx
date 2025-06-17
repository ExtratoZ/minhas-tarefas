import { useSelector } from 'react-redux'

import Tasks from '../../components/Tasks'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <ul>
        {tasks.map((t) => (
          <li key={t.titulo}>
            <Tasks
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
