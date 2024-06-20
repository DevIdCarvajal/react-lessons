import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './App.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AddNewWithRedux from './components/AddNew/AddNewWithRedux'
import NewsListWithRedux from './components/NewsList/NewsListWithRedux'
import NewDetailWithRedux from './components/NewDetailWithRedux'

import ThemeContext from './contexts/ThemeContext'

import { fetchNews } from './slices/newsSlice'

const AppWithRedux = () => {
  const [isDark, setIsDark] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])
  
  return (
    <div className="App">
      <ThemeContext.Provider value={isDark}>
        <Header setIsDark={setIsDark} />

        <Nav />
        
        <Routes>
          <Route path="/" element={ <h2>Te damos la bienvenida</h2> } />
          <Route path="/last-news" element={ <NewsListWithRedux /> } />
          <Route path="/new-detail/:id" element={ <NewDetailWithRedux /> } />
          <Route path="/add-new" element={ <AddNewWithRedux /> } />
          <Route path="*" element={ <h2>Estos no son los androides que buscas</h2> } />
        </Routes>
        
      </ThemeContext.Provider>
      
      <footer>FOOTER</footer>
    </div>
  )
}

export default AppWithRedux
