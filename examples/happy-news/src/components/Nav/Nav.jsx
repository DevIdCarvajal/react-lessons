import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {

  return (
    <nav>
      <Link to="/">Inicio</Link> |
      <Link to="/last-news">Noticias</Link> |
      <Link to="/add-new">Nueva noticia</Link>
    </nav>
  )
}

export default Nav
