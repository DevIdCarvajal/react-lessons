// imports
import { useEffect, useState } from "react"

import "./App.css"

import Quote from "./components/Quote/Quote"
import Header from "./components/Header/Header"

/* 
const mockData = [
  {
    text: "No por mucho madrugar te levantas más temprano",
    image: "https://2.bp.blogspot.com/-PeMOKsB0CbY/WVemAK8OrTI/AAAAAAAAT6U/TPhWJV_uloMb3siE9aKyoH07rhWmvN-XwCLcBGAs/s1600/Madrugar%2Bestres.jpg"
  },
  {
    text: "Al pan pan y al vino melanina",
    image: "https://mundopan.es/wp-content/uploads/2015/03/pan-mundopan.jpg"
  }
]
*/

// presentation logic
const App = () => {
  
  // initialization
  const [heading, setHeading] = useState("Hola Querido Mundo")
  const [quotes, setQuotes] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  
  // side effects 
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(quotes => {
        const quotesFiltered = quotes.map(quote => {
          return {
            text: quote.text,
            image: "",
            author: quote.author
          }
        })
        
        setQuotes(quotesFiltered)
      })
      .catch(error => console.log("La API no me quiere"))
  }, [])

  // more logic
  const changeMessage = message => setHeading(message)
  
  // render (JSX)
  return (
    <div className="App">
      <Header
        heading={heading}
        changeMessage={changeMessage}
      />

      <button onClick={() => setShowMessage(!showMessage)}>
        {!showMessage ? "Mostrar" : "Ocultar"}
      </button>

      {
        showMessage
        &&
          <div>
            <h2>Example Text</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis, porro cupiditate accusamus nobis ducimus aspernatur rem dolor eius quaerat odit natus dignissimos quisquam amet atque, quo fugit mollitia obcaecati?</p>
          </div>
      }

      <h2>Quotes</h2>

      <div>
      {
        quotes
        ?
        quotes.map((quote, index) =>
          <Quote
            text={quote.text}
            image={quote.image}
            author={quote.author}
            key={index}
          />
        )
        :
        <p>Cargando citas...</p>
      }
        <button onClick={() => setQuotes([])}>Limpiar</button>
      </div>
    </div>
  )
}

export default App