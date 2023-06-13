// imports
import { useState } from "react"

import "./App.css"
// ...

import Quote from "./components/Quote/Quote"
// import Header from "./components/Header/Header"

// presentation logic
const App = () => {
  
  // initialization
  const [heading, setHeading] = useState("Hola Querido Mundo")

  const [quotes, setQuotes] = useState([
    {
      text: "No por mucho madrugar te levantas más temprano",
      image: "https://2.bp.blogspot.com/-PeMOKsB0CbY/WVemAK8OrTI/AAAAAAAAT6U/TPhWJV_uloMb3siE9aKyoH07rhWmvN-XwCLcBGAs/s1600/Madrugar%2Bestres.jpg"
    },
    {
      text: "Al pan pan y al vino melanina",
      image: "https://mundopan.es/wp-content/uploads/2015/03/pan-mundopan.jpg"
    }
  ])
  
  const [showMessage, setShowMessage] = useState(false)

  // more logic
  const changeMessage = () => {

    if(!showMessage) {
      setHeading("Adiós Mundo Cruel")
      setShowMessage(true)
    }
    else {
      setHeading("Hola Querido Mundo")
      setShowMessage(false)
    }
  }
  
  // render (JSX)
  return (
    <div className="App">
      {/* <Header /> */}

      {
        // showMessage
        // &&
        //   <div>
        //     <h2>Example Text</h2>

        //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis, porro cupiditate accusamus nobis ducimus aspernatur rem dolor eius quaerat odit natus dignissimos quisquam amet atque, quo fugit mollitia obcaecati?</p>
        //   </div>
      }

      <h2>Quotes</h2>

      <div>
      {
        quotes.map((quote, index) =>
          <Quote
            text={quote.text}
            image={quote.image}
            key={index}
          />
        )
      }
        <button onClick={() => setQuotes([])}>Limpiar</button>
      </div>
    </div>
  )
}

export default App