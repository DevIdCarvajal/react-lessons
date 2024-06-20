import { useState } from 'react'
import { validateTextQuote } from '../utils/validations'

const AddQuote = ({ addQuote }) => {
  const [quoteText, setQuoteText] = useState('')
  const [quoteAuthor, setQuoteAuthor] = useState('')
  const [error, setError] = useState(false)

  const validateQuote = () => {
    if (
      quoteText && validateTextQuote(quoteText) &&
      quoteAuthor
    ) {
      // Add new quote to quotes
      const newQuote = {
        text: quoteText,
        author: quoteAuthor,
        premium: false
      }

      addQuote(newQuote)
      setQuoteText('')
      setQuoteAuthor('')
      setError(false)
    }
    else {
      setError(true)
    }
  }

  return (
    <div>
      <h2>Crear nueva cita</h2>
      
      Texto:
      <input
        type="text"
        value={quoteText}
        style={{ backgroundColor: error ? '#D77C7A' : '#C4D5C5' }}
        onChange={event => { setQuoteText(event.target.value) }}
      />
      <br />

      Autor/a:
      <input
        type="text"
        value={quoteAuthor}
        style={{ backgroundColor: error ? '#D77C7A' : '#C4D5C5' }}
        onChange={event => { setQuoteAuthor(event.target.value) }}
      />
      <br />

      { error && <p>Hay algún error en los datos</p> }

      <button onClick={validateQuote}>Confirmar</button>
    </div>
  )
}

export default AddQuote
