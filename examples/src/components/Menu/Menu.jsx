import { useContext } from "react"

import UserContext from "../../contexts/user"

const Menu = () => {
  const userName = useContext(UserContext)

  return (
    <nav>
      <a href="#">Inicio</a>|
      <a href="#">Movidas varias</a>|
      <a href="#">Perfil de {userName}</a>
    </nav>
  )
}

export default Menu