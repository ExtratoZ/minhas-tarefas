import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/TaskEnum'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      titulo: 'Estudar Redux',
      descricao: 'Estudar Redux para gerenciar o estado da aplicação',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.URGENTE,
      id: 1
    },
    {
      titulo: 'Estudar TypeScript',
      descricao: 'Estudar TypeScript para melhorar a qualidade do código',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE,
      id: 2
    },
    {
      titulo: 'Ir na Academia',
      descricao: 'Ir na academia para manter a saúde em dia',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.IMPORTANTE,
      id: 3
    }
  ]
}

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    add: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      } else {
        state.itens.push(action.payload)
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const tareJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tareJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, add, cadastrar, alteraStatus } = TasksSlice.actions
export default TasksSlice.reducer
