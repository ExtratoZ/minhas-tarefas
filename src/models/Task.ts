import * as enums from '../utils/enums/TaskEnum'

class Task {
  titulo: string
  descricao: string
  status: enums.Status
  prioridade: enums.Prioridade
  id: number

  constructor(
    titulo: string,
    descricao: string,
    status: enums.Status,
    prioridade: enums.Prioridade,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.status = status
    this.prioridade = prioridade
    this.id = id
  }
}

export default Task
