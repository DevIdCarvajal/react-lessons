// imports
import { useState } from "react"

import "./App.css"
// ...

import Quote from "./Quote"

// presentation logic
const App = () => {
  
  // initialization
  const [heading, setHeading] = useState("Hola Querido Mundo")
  const [quotes, setQuotes] = useState(["Cita 1", "Cita 2"])
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
      <h1>{ heading }</h1>

      <button onClick={changeMessage}>Cambiar mensaje</button>

      {
        showMessage
        &&
          <div>
            <h2>Example Text</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis, porro cupiditate accusamus nobis ducimus aspernatur rem dolor eius quaerat odit natus dignissimos quisquam amet atque, quo fugit mollitia obcaecati?</p>
          </div>
      }

      <h2>Quotes</h2>

      <ul>
      {/* quotes.map( quote => <li>{quote}</li> ) */}

      { quotes.map( quote => <Quote /> ) }
      </ul>
    </div>
  )
}

export default App