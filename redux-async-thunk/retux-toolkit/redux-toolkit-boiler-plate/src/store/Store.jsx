import { configureStore } from '@reduxjs/toolkit'
import counterSLice from './reducers/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSLice,
  },
})