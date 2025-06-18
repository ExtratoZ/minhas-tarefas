import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './reducers/Tasks'
import filterReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
