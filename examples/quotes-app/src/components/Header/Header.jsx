import { useState } from "react"

import Menu from "../Menu/Menu"

const Header = ({heading, changeMessage}) => {
  const [message, setMessage] = useState(heading)
  
  return (
    <div>
      <Menu />
      
      <h1>{heading}</h1>

      <div>
        Escribe tu nuevo mensaje:
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>

      <button onClick={() => changeMessage(message)}>
        Cambiar mensaje
      </button>
    </div>
  )
}

export default Header