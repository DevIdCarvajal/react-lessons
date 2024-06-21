import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './App.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Misc from './components/Misc/Misc'
import AddItemFormWR from './components/AddItemForm/AddItemFormWR'
import ItemsListWR from './components/ItemsList/ItemsListWR'
import YTVideoWR from './components/YTVideoWR'

import ThemeContext from './contexts/ThemeContext'

import { fetchItems } from './slices/items'

const AppWR = () => {
  const [isDark, setIsDark] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <div className="App">
      <ThemeContext.Provider value={isDark}>
        <Header setIsDark={setIsDark} />
        <Nav />

        <Routes>
          <Route path="/" element={ <h1>Bienvenidos hijos del rock 'n' roll</h1> } />
          <Route path="/random" element={ <Misc /> } />
          <Route path="/new-video" element={ <AddItemFormWR /> } />
          <Route path="/video/:id" element={ <YTVideoWR /> } />
          <Route path="/videos" element={ <ItemsListWR /> } />
          <Route path="*" element={ <p>Estos no son los androides que buscas</p> } />
        </Routes>
      </ThemeContext.Provider>
      
      <footer>&copy; Todos los derechos reservados</footer>
    </div>
  )
}

export default AppWR
