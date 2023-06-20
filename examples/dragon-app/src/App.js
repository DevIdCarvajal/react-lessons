// Imports
import { useState } from "react"
import "./App.css"

import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import CharacterList from "./components/CharacterList"
import SaiyanList from "./components/SaiyanList"
import Home from "./components/Home"
import Contact from "./components/Contact"
import CharacterDetail from "./components/CharacterDetail"
import Asteroids from "./components/Asteroids"
import NoMatch from "./components/NoMatch"
import Menu from "./components/Menu"

import useFetch from "./hooks/useFetch"
import AddCharacterContext from "./contexts/AddCharacterContext"

import { motion } from "framer-motion"

// Function
const App = () => {

  // Private states & functions
  // const [urlData, setUrlData] = useState("https://jsonplaceholder.typicode.com/users")
  const [maximum, setMaximum] = useState(0)
  const increaseMaximum = () => setMaximum(maximum+1)

  // const changeUrlData = (start, end) => {
  //   setUrlData("https://jsonplaceholder.typicode.com/users?start=" +
  //               start + "&end=" + end)
  // }
  
  // Initialize data
  const titleApp = "Feliz Día de Goku"
  
  // Retrieve data
  const [
    characters,
    setCharacters,
    loadingCharacters,
    errorCharacters
  // ] = useFetch(urlData)
  ] = useFetch("https://jsonplaceholder.typicode.com/users")
  
  return (
    <div className="App">

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="blueBox"
      />

      {/* <Header
        titleApp={titleApp}
        maximum={maximum}
        increaseMaximum={increaseMaximum}
      />

      <hr /> */}

      <Menu />

      <hr />

      <Routes>
        <Route path="/" element={ <Home title="Goku" /> } />
        <Route path="characters" element={
          <AddCharacterContext.Provider value={{
            characters,
            setCharacters,
            loadingCharacters,
            errorCharacters
          }}>
            <CharacterList />
          </AddCharacterContext.Provider>
        } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="character/:id" element={ <CharacterDetail /> } />
        <Route path="saiyans" element={ <SaiyanList /> } />
        <Route path="asteroids" element={ <Asteroids /> } />
        <Route path="*" element={ <NoMatch /> } />
      </Routes>
    </div>
  )
}

// Exports
export default App