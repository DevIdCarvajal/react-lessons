import { useState } from 'react'

import './AddItemForm.css'

import { validateTitle } from '../../utils/validations'

const AddItemForm = ({ addNewItem }) => {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)

  const validate = () => {
    
    // Si los datos están bien
    if (validateTitle(title) && url) {
      addNewItem({ title, url })

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

export default AddItemForm
