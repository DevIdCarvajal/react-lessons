import { useState } from "react"
import { useDispatch } from "react-redux"
import { addSaiyan } from "../slices/characters/charactersSlice"

const SaiyanForm = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <p>Nombre:
        <input type="text" onChange={e => setName(e.target.value)} />
      </p>

      <button onClick={() => dispatch(addSaiyan(name))}>Añadir nuevo</button>
    </div>
  )
}

export default SaiyanForm