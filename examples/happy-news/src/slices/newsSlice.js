import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return data.slice(0, 2)
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {
    addNew: (state, action) => {
      return [...state, { id: state.length + 1, ...action.payload }]
    },
    deleteNews: state => {
      return []
    }
  },
  extraReducers: builder => {
    builder
      //.addCase(fetchNews.pending, (state, action) => {})
      .addCase(fetchNews.fulfilled, (state, action) => {
        return action.payload.map((item, index) => {
          return {
            id: item.id,
            title: item.title,
            text: item.body,
            image: '',
            caption: ''
          }
        })
      })
      //.addCase(fetchNews.rejected, (state, action) => {})
    }
})

export const {
  addNew,
  deleteNews
} = newsSlice.actions

export default newsSlice.reducer