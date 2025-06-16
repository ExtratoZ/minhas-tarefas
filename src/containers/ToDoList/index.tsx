import Tasks from '../../components/Tasks'
import { Container } from './styles'

const Tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Revisar conceitos de hooks e context API',
    prioridade: 'Importante',
    status: 'Concluída'
  },
  {
    titulo: 'Estudar Typescript',
    descricao: 'Revisar conceitos de tipos e interfaces',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Ir a Academia',
    descricao: 'Ficar grandão',
    prioridade: 'Importante',
    status: 'Pendente'
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
