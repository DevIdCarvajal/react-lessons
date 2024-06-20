import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async (thunkAPI) => {
    const response = await fetch('https://api.quotable.io/quotes/random?limit=3')
    const data = await response.json()

    return data
  }
)

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: [],
  reducers: {
    addQuote: (state, action) => {
      return [...state, { id: state.length + 1, ...action.payload }]
    },
    deleteQuotes: state => {
      return []
    }
  },
  extraReducers: builder => {
    builder
      //.addCase(fetchQuotes.pending, (state, action) => {})
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        return action.payload.map((quote, index) => {
          return {
            id: index + 1,
            text: quote.content,
            author: quote.author,
            premium: Number(quote.dateAdded.slice(0,4)) > 2022 ? true : false
          }
        })
      })
      //.addCase(fetchQuotes.rejected, (state, action) => {})
    }
})

export const {
  addQuote,
  deleteQuotes
} = quotesSlice.actions

export default quotesSlice.reducer