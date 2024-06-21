import { useState } from 'react'
import { useDispatch } from 'react-redux'

import './AddItemForm.scss'

import { validateTitle } from '../../utils/validations'
import { addItem } from '../../slices/items'

const AddItemFormWR = () => {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const validate = () => {
    
    // Si los datos están bien
    if (validateTitle(title) && url) {
      dispatch(addItem({ title, url }))

      setTitle('')
      setUrl('')
      setError(false)
    }
    else {
      // Dar feedback al usuario
      setError(true)
    }
  }

  return (
    <div className="AddItemForm">
      
      <div>
        Título:
        <input
          type="text"
          className={ error ? 'errorInput' : 'textInput' }
          onChange={ event => setTitle(event.target.value) }
          value={ title }
        />
      </div>
      
      <div>
        Código:
        <input
          type="text"
          className={ error ? 'errorInput' : 'textInput' }
          onChange={ event => setUrl(event.target.value) }
          value={ url }
        />
      </div>

      { error && <p>Los datos están mal</p> }

      <div>
        <button onClick={validate}>
          Guardar
        </button>
      </div>

    </div>
  )
}

export default AddItemFormWR
