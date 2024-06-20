import logo from '../../assets/logo.jpg'

import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo" />

      <h1>La web de citas (célebres)</h1>
    </header>
  )
}

export default Header
