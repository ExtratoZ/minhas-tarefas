import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/TaskEnum'

type FilterState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
const initialState: FilterState = {
  termo: '',
  criterio: 'todas',
  valor: undefined
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filterSlice.actions
export default filterSlice.reducer
