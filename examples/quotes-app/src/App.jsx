// imports
import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import AddQuote from './components/AddQuote'
import QuotesList from './components/QuotesList/QuotesList'
import QuoteDetail from './components/QuoteDetail/QuoteDetail'

import AuthContext from './contexts/authContext'

// definition
const App = () => {

  // init
  const [isLogged, setIsLogged] = useState(false)
  const [quotes, setQuotes] = useState([])
  const [totalPremium, setTotalPremium] = useState(0)

  const signin = () => {
    setIsLogged(true)
  }
  
  // side effects
  const getQuotes = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
  
      setQuotes(data.map((quote, index) => {
        return {
          id: index + 1,
          text: quote.content,
          author: quote.author,
          premium: Number(quote.dateAdded.slice(0,4)) > 2022 ? true : false
        }
      }))
    }
    catch (error) {
      console.error('Hubo un error')
    }
  }

  // Caso 1: Carga inicial (una sola vez)
  useEffect(() => {
    getQuotes('https://api.quotable.io/quotes/random?limit=3')
  }, [])

  // Caso 2: Cada vez que renderiza el componente (incluida la primera)
  // useEffect(() => {
  //   // ...
  // })

  // Caso 3: Cada vez que renderiza el componente (incluida la primera) a causa de una dependencia
  useEffect(() => {
    setTotalPremium(
      quotes.reduce((total, quote) => {
        return quote.premium ? total + 1 : total
      }, 0)
    )
  }, [quotes])

  // render
  return (
    <div className="App">
      <Header />
      <Nav />

      <button onClick={signin}>Login</button>
      
      <Routes>
        <Route path="/" element={ <h1>Bienvenidos!!!</h1> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/quotes" element={
          <AuthContext.Provider value={{ isLogged, totalPremium }}>
            <QuotesList quotes={quotes} />
          </AuthContext.Provider>
        } />
        <Route path="/quote/:id" element={ <QuoteDetail quotes={quotes} /> } />
        <Route path="/new-quote" element={
          <AuthContext.Provider value={{ isLogged, totalPremium }}>
            <AddQuote addQuote={quote => setQuotes([...quotes, quote])} />
          </AuthContext.Provider>
        } />
        <Route path="*" element={ <p>Estos no son los androides que buscas</p> } />
      </Routes>

      <p>Total citas premium: {totalPremium}</p>

      <button onClick={getQuotes}>Dame otras 3</button>

      <footer>FOOTER</footer>
    </div>
  )
}

// exports
export default App
