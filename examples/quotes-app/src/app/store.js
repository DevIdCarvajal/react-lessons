import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from '../slices/quotes'

export const store = configureStore({
  reducer: {
    quotes: quotesReducer
  }
})