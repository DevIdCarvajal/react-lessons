// Action creators (factory)
export const getSaiyans = () => {
  return { type: "GET_SAIYANS" }
}

export const addCharacter = payload => {
  return { type: "GET_CHARACTER", payload }
}

export const addSaiyan = name => {
  return {
    type: "ADD_CHARACTER",
    payload: { name, race: "supersaiyan" }
  }
}