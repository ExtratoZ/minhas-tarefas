import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/TaskEnum'

const TasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar Redux',
      'Estudar Redux para gerenciar o estado da aplicação',
      enums.Status.PENDENTE,
      enums.Prioridade.URGENTE,
      1
    ),
    new Task(
      'Estudar TypeScript',
      'Estudar TypeScript para melhorar a qualidade do código',
      enums.Status.PENDENTE,
      enums.Prioridade.IMPORTANTE,
      2
    ),
    new Task(
      'Ir na Academia',
      'Ir na academia para manter a saúde em dia',
      enums.Status.CONCLUIDA,
      enums.Prioridade.IMPORTANTE,
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = TasksSlice.actions
export default TasksSlice.reducer
