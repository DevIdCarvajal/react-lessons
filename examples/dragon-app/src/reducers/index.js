import { combineReducers } from "redux"

import characterReducer from "./characterReducer"
//import asteroidsReducer from "./asteroidsReducer"

const rootReducer = combineReducers({
  characters: characterReducer
//  asteroids: asteroidsReducer
})

export default rootReducer