import Tasks from '../../components/Tasks'
import { Container } from './styles'
import * as enums from '../../utils/enums/TaskEnum'

const Tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Revisar conceitos de hooks e context API',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar Typescript',
    descricao: 'Revisar conceitos de tipos e interfaces',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Ir a Academia',
    descricao: 'Ficar grandão',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ToDoList = () => (
  <Container>
    <ul>
      {Tarefas.map((t) => (
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

export default ToDoList
