import { useContext } from 'react'

import './Header.css'

import logo from '../../assets/espinete.jpeg'

import ThemeContext from '../../contexts/ThemeContext'

const Header = ({ setIsDark }) => {
  const mainTitle = 'Tu web de nostalgia'

  const isDark = useContext(ThemeContext)

  return (
    <header className="Header">
      <h1>{ mainTitle }</h1>

      <img src={ logo } alt="" />

      <button onClick={() => setIsDark(!isDark)}>
        { isDark ? 'Sol' : 'Luna' }
      </button>
    </header>
  )
}

export default Header
