import { useState } from 'react'

const textInputStyle = {
  backgroundColor: 'white'
}

const textInputStyleError = {
  backgroundColor: '#E86A61'
}

const AddNew = ({ addNewData }) => {

  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState(false)

  const validate = () => {

    // Si los campos están bien --> Añadir noticia a news
    if (title) {
      setTitleError(false)

      const newData = {
        title,
        text: 'Lo del textarea',
        image: '',
        caption: '(Pie de foto)'
      }
      
      addNewData(newData)
    }
    // Si no --> Feedback error al usuario
    else {
      setTitleError(true)
    }
  }
  
  return (
    <div className="AddNew">
      <p>
        Título:
        <input
          type="text"
          onChange={event => setTitle(event.target.value)}
          style={titleError ? textInputStyleError : textInputStyle}
        />
      </p>
      <p>
        Texto:
        <textarea></textarea>
      </p>

      <button onClick={validate}>Crear noticia</button>
    </div>
  )
}

export default AddNew
