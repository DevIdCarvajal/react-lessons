import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async (thunkAPI) => {
    const response = await fetch("https://type.fit/api/quotes")
    const data = await response.json()

    return data
  }
)

const initialState = []

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      // state.push(action.payload)
      return [...state, action.payload]
    },
    deleteQuotes: state => {
      return []
    }
  },
  extraReducers: builder => {
    builder
      //.addCase(fetchQuotes.pending, (state, action) => {
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        return action.payload.map((quote, index) => {
          return {
            id: index + 1,
            text: quote.text,
            image: "",
            author: quote.author
          }
        })
      })
      //.addCase(fetchQuotes.rejected, (state, action) => {
    }
})

export const {
  addQuote,
  deleteQuotes
} = quotesSlice.actions

export default quotesSlice.reducer