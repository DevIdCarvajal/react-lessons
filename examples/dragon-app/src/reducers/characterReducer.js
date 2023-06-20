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

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SAIYANS":
      return state.filter(char => char.race === "supersaiyan")
    case "GET_CHARACTER":
      return state.filter(char => char.id === action.payload)
    case "ADD_CHARACTER":
      return [...state, action.payload]
    default:
      return state;
  }
}

export default characterReducer