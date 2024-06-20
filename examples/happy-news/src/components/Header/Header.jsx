import { useContext, useEffect } from 'react'

import styles from './Header.module.css'

import logo from './logo.jpg'

import ThemeContext from '../../contexts/ThemeContext'

const Header = ({ setIsDark }) => {
  const mainTitle = 'La web de noticias felices'

  const isDark = useContext(ThemeContext)

  return (
    // <header className={
    //   isDark
    //   ?
    //   {
    //     ...styles.headerContainer,
    //     ...styles.darkTheme
    //   }
    //   :
    //   {
    //     ...styles.headerContainer,
    //     ...styles.lightTheme
    //   }
    // }>
    <header className={styles.headerContainer}>
      <img src={logo} alt="" />

      <h1 className={styles.mainTitle}>{ mainTitle }</h1>

      <button onClick={() => { setIsDark(!isDark) }}>
        Cambiar tema
      </button>
    </header>
  )
}

export default Header
