import './Nav.css'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link> |
      <Link to="/home">Random</Link> |
      <Link to="/quotes">Citas</Link> |
      <Link to="/new-quote">Nueva cita</Link>
    </nav>
  )
}

export default Nav
