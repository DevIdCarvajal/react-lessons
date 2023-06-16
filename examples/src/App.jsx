// imports
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"

import UserContext from "./contexts/user"

import Header from "./components/Header/Header"
import HiddenText from "./components/HiddenText/HiddenText"
import QuotesListRedux from "./components/QuotesList/QuotesListRedux"
import QuoteDetail from "./components/QuoteDetail/QuoteDetail"

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
  
  // ---- initialization ----
  const [heading, setHeading] = useState("Hola Querido Mundo")
  const [userData, setUserData] = useState("David")

  // ---- more logic ----
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

      <hr />

      <Routes>
        <Route path="/" element={ <HiddenText /> } />
        <Route path="quotes" element={ <QuotesListRedux /> } />
        <Route path="quote/:id" element={ <QuoteDetail /> } />
        <Route path="*" element={ <p>Estos no son</p> } />
      </Routes>
    </div>
  )
}

export default App