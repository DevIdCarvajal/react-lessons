import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    name: "Goku",
    race: "supersaiyan"
  },
  {
    name: "Krilin",
    race: "human"
  },
  {
    name: "Gohan",
    race: "supersaiyan"
  }
]

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters: state => state,
    addSaiyan: (state, action) => {
      state.push({ name: action.payload, race: "supersaiyan" })
    }
  }
})

export const {
  getCharacters,
  addSaiyan
} = charactersSlice.actions

export default charactersSlice.reducer