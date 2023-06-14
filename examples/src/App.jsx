// imports
import { useEffect, useState } from "react"

import "./App.css"

import Quote from "./components/Quote/Quote"
import Header from "./components/Header/Header"

import useFetch from "./hooks/useFetch"
import UserContext from "./contexts/user"

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
  const [totalQuotes, setTotalQuotes] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  //const [urlRequest, setUrlRequest] = useState("https://type.fit/api/quotes")
  const [urlRequest, setUrlRequest] = useState("")

  const [userData, setUserData] = useState("David")
  
  // side effects
  let [data, loading, error] = useFetch(urlRequest)

  useEffect(() => {
    if(data) {
      const quotesFiltered = data.map(quote => {
        return {
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

  // more logic
  const changeMessage = message => setHeading(message)
  
  // render (JSX)
  return (
    <div className="App">
      <UserContext.Provider value={userData}>
        <Header
          heading={heading}
          changeMessage={changeMessage}
        />
      </UserContext.Provider>

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

export default App