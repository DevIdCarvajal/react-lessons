import { useState, useContext } from "react"
import AddCharacterContext from "../contexts/AddCharacterContext";

const CharacterForm = () => {

  // Consuming context
  const {characters, setCharacters} = useContext(AddCharacterContext)

  const [name, setName] = useState("")
  const [race, setRace] = useState("")

  const handlerName = event => setName(event.target.value)
  const handlerRace = event => setRace(event.target.value)

  const addCharacter = () =>
    setCharacters([...characters, { name, race }])

  return (
    <div>
      <div>
        <p>Nombre: <input type="text" onChange={handlerName} /></p>
        <p>
          Raza:
          <select id="raceChar" onChange={handlerRace}>
            <option value="">Humano</option>
            <option value="supersaiyan">Supersaiyan</option>
            <option value="namekiano">Namekiano</option>
          </select>
        </p>
      </div>

      <button onClick={addCharacter}>Añadir nuevo</button>
    </div>
  )
}

export default CharacterForm