// imports
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Misc from './components/Misc/Misc'
import AddItemForm from './components/AddItemForm/AddItemForm'
import ItemsList from './components/ItemsList/ItemsList'
import YTVideo from './components/YTVideo'

import ThemeContext from './contexts/ThemeContext'

// definition
const App = () => {
  
  // init
  const [items, setItems] = useState([])
  const [isDark, setIsDark] = useState(false)

  // presentation logic
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships')
        const data = await response.json()

        setItems(data.results.map((item, index) => {
          return {
            id: index + 1,
            title: item.name,
            url: ''
          }
        }))
      }
      catch (error) {
        // ...
      }
    }

    getData()
  }, [])

  // render
  return (
    <div className="App">
      <ThemeContext.Provider value={isDark}>
        <Header setIsDark={setIsDark} />
        <Nav />

        <Routes>
          <Route path="/" element={ <h1>Bienvenidos hijos del rock 'n' roll</h1> } />
          <Route path="/random" element={ <Misc /> } />
          <Route path="/new-video" element={
            <AddItemForm addNewItem={newItem => setItems([newItem, ...items])} />
          } />
          <Route path="/video/:id" element={ <YTVideo items={items} /> } />
          <Route path="/videos" element={ <ItemsList items={items} /> } />
          <Route path="*" element={ <p>Estos no son los androides que buscas</p> } />
        </Routes>
      </ThemeContext.Provider>
      
      <footer>&copy; Todos los derechos reservados</footer>
    </div>
  )
}

// exports
export default App
