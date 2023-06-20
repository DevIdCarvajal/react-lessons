import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from '../slices/quotesSlice'

export const store = configureStore({
  reducer: {
    quotes: quotesReducer
  }
})