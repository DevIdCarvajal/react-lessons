import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="characters">Personajes</Link></li>
        <li><Link to="contact">Contacto</Link></li>
        <li><Link to="character/4">Ver el pj 4</Link></li>
        <li><Link to="saiyans">Saiyans</Link></li>
        <li><Link to="asteroids">Asteroids</Link></li>
      </ul>
    </div>
  )
}

export default Menu