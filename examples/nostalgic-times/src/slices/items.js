import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (thunkAPI) => {
    const response = await fetch('https://swapi.dev/api/starships')
    const data = await response.json()

    return data
  }
)

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [{ id: state.length + 1, ...action.payload }, ...state]
    },
    deleteItems: state => {
      return []
    }
  },
  extraReducers: builder => {
    builder
      //.addCase(fetchItems.pending, (state, action) => {})
      .addCase(fetchItems.fulfilled, (state, action) => {
        return action.payload.results.map((item, index) => {
          return {
            id: index + 1,
            title: item.name,
            url: ''
          }
        })
      })
      //.addCase(fetchItems.rejected, (state, action) => {})
  }
})

export const {
  addItem,
  deleteItems
} = itemsSlice.actions

export default itemsSlice.reducer