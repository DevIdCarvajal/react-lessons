// imports
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AddNew from './components/AddNew/AddNew'
import NewsList from './components/NewsList/NewsList'
import NewDetail from './components/NewDetail'

import ThemeContext from './contexts/ThemeContext'


// definition
const App = () => {

  // init
  const [news, setNews] = useState([])
  const [isDark, setIsDark] = useState(false)

  // presentation logic
  const addNewData = newData => setNews([newData, ...news])

  // Caso 1: Cuando el componente se monta (primera carga)
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
  
      setNews(data.slice(0, 2).map(item => {
        return {
          id: item.id,
          title: item.title,
          text: item.body,
          image: '',
          caption: ''
        }
      }))
    }
    
    getNews()

    // ...
  }, [])

  // Caso 2: Cada vez que el componente se carga (incluida la primera)
  // useEffect(() => {
  //   // ...
  // })

  // Caso 3: Cada vez que el componente se carga (incluida la primera), como consecuencia de una dependencia
  // [Ir a NewsList]

  // render
  return (
    <div className="App">
      <ThemeContext.Provider value={isDark}>
        <Header setIsDark={setIsDark} />

        <Nav />
        
        <Routes>
          <Route path="/" element={ <h2>Te damos la bienvenida</h2> } />
          <Route path="/last-news" element={ <NewsList news={news} /> } />
          <Route path="/new-detail/:id" element={ <NewDetail news={news} /> } />
          <Route path="/add-new" element={ <AddNew addNewData={addNewData} /> } />
          <Route path="*" element={ <h2>Estos no son los androides que buscas</h2> } />
        </Routes>
        
      </ThemeContext.Provider>
      
      <footer>FOOTER</footer>
    </div>
  )
}

// exports
export default App
