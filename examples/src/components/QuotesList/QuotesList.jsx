import { useEffect, useState } from "react"

import Quote from "../Quote/Quote"

import useFetch from "../../hooks/useFetch"

const QuotesList = () => {
  const [totalQuotes, setTotalQuotes] = useState(0)
  const [quotes, setQuotes] = useState(null)
  const [urlRequest, setUrlRequest] = useState("https://type.fit/api/quotes")
  // const [urlRequest, setUrlRequest] = useState("")
  let [data, loading, error] = useFetch(urlRequest)

  // ---- side effects ----
  useEffect(() => {
    if(data) {
      const quotesFiltered = data.map((quote, index) => {
        return {
          id: index + 1,
          text: quote.text,
          image: "",
          author: quote.author
        }
      })
      
      setQuotes(quotesFiltered)
    }
  }, [data])

  useEffect(() => {
    setTotalQuotes(quotes ? quotes.length : 0)
  }, [quotes])

  return (
    <div>
      <h2>Quotes ({totalQuotes})</h2>

      <div>
      {
        error
        ?
        <p>Error en el servidor</p>
        :
          loading || !quotes
          ?
          <p>Cargando citas...</p>
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
        <button onClick={() => setQuotes(null)}>Limpiar</button>
      </div>
    </div>
  )
}

export default QuotesList