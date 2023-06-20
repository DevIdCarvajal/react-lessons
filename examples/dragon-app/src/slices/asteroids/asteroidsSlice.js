import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAsteroids = createAsyncThunk(
  'asteroids/fetchAsteroids',
  async (thunkAPI) => {
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-05-23&end_date=2023-05-23&api_key=2zwcMOK07pHcY9FwwIjIAPL9hCVUa8Jpn7SXfQGi')
    const data = await response.json()

    return data
  }
)

const initialState = []

const asteroidsSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {
    getAsteroids: state => state,
    addAsteroid: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: builder => {
    builder
      // .addCase(fetchAsteroids.pending, (state, action) => {
      //   // ...
      // })
      .addCase(fetchAsteroids.fulfilled, (state, action) => {
        action.payload.near_earth_objects["2023-05-23"].map(ast => {
          state.push({
            name: ast.name,
            warning: ast.name === "(2019 UJ3)" ? true : ast.is_potentially_hazardous_asteroid
          })
        })
      })
      // .addCase(fetchAsteroids.rejected, (state, action) => {
      //   // ...
      // })
  }
})

export const {
  getAsteroids,
  addAsteroid
} = asteroidsSlice.actions

export default asteroidsSlice.reducer