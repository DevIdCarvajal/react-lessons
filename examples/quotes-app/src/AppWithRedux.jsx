import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import AddQuoteWithRedux from './components/AddQuoteWithRedux'
import QuotesListWithRedux from './components/QuotesList/QuotesListWithRedux'
import QuoteDetailWithRedux from './components/QuoteDetail/QuoteDetailWithRedux'

import AuthContext from './contexts/authContext'
import { useDispatch } from 'react-redux'
import { fetchQuotes } from './slices/quotes'

const AppWithRedux = () => {

  const [isLogged, setIsLogged] = useState(false)

  const dispatch = useDispatch()

  const signin = () => {
    setIsLogged(true)
  }

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Nav />

      <button onClick={signin}>Login</button>
      
      <Routes>
        <Route path="/" element={ <h1>Bienvenidos!!!</h1> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/quotes" element={
          <AuthContext.Provider value={{ isLogged }}>
            <QuotesListWithRedux />
          </AuthContext.Provider>
        } />
        <Route path="/quote/:id" element={ <QuoteDetailWithRedux /> } />
        <Route path="/new-quote" element={
          <AuthContext.Provider value={{ isLogged }}>
            <AddQuoteWithRedux />
          </AuthContext.Provider>
        } />
        <Route path="*" element={ <p>Estos no son los androides que buscas</p> } />
      </Routes>

      <footer>FOOTER</footer>
    </div>
  )
}

export default AppWithRedux
