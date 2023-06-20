import { useContext } from "react"
// import styled from "styled-components"

import UserContext from "../../contexts/user"

// const MenuItem = styled.a`
//   display: inline-block;
//   background-color: #e10098;
//   color: #fff;
// `

import { Link } from "react-router-dom";

const Menu = () => {
  const userName = useContext(UserContext)

  return (
    <nav>
      <Link to="/">Inicio</Link>|
      <Link to="/quotes">Citas célebres</Link>|
      <Link to="#">Perfil de {userName}</Link>
    </nav>
  )
}

export default Menu