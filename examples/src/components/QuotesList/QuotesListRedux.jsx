import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Quote from "../Quote/Quote"

import { addQuote, deleteQuotes, fetchQuotes } from "../../slices/quotesSlice"

const QuotesListRedux = () => {
  const [totalQuotes, setTotalQuotes] = useState(0)

  const dispatch = useDispatch()
  const quotes = useSelector(state => state.quotes)

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])

  useEffect(() => {
    setTotalQuotes(quotes ? quotes.length : 0)
  }, [quotes])

  return (
    <div>
      <h2>Quotes ({totalQuotes})</h2>

      <div>
      {
        quotes.length === 0
        ?
        <p>No hay citas</p>
        :
        quotes.map((quote, index) =>
          <Quote
            id={quote.id}
            text={quote.text}
            image={quote.image}
            author={quote.author}
            key={index}
          />
        )
      }
        <button onClick={() => dispatch(deleteQuotes())}>Limpiar</button>

        <button onClick={() => dispatch(addQuote({
          id: 2,
          text: "poiyyhbf",
          author: "mcvnmcv",
          image: ""
        }))}>Añadir cita</button>
      </div>
    </div>
  )
}

export default QuotesListRedux