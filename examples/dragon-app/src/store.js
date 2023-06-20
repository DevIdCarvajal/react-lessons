import { configureStore } from "@reduxjs/toolkit"

import asteroidsReducer from "./slices/asteroids/asteroidsSlice"
import charactersReducer from "./slices/characters/charactersSlice"

const store = configureStore({
  reducer: {
    asteroids: asteroidsReducer,
    characters: charactersReducer,
    // More reducers FROM slice
  },
  //middleware: ...
  devTools: true
})

export default store