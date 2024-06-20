import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/random">De todo un poco</Link>
      <Link to="/new-video">Nueva</Link>
      <Link to="/videos">Listado</Link>
    </nav>
  )
}

export default Nav
