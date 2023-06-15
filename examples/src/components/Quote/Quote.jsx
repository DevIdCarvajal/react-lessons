//import { useContext } from "react"
import bulletImg from "./bullet.png"
import "./Quote.scss"

import { Link } from "react-router-dom"

const Quote = ({id, text, image, author}) => {
  // const dark = useContext(ThemeContext)
  const dark = true
  
  return (
    <div className={ `Quote${ dark ? " dark" : "" }` }>
      <div>
        <img
          src={image}
          alt=""
          style={{ width: "240px" }}
        />
      </div>
      <div>
        <cite>
          <img src={bulletImg} alt="·" />
          {text}
        </cite>
      </div>
      <div>
        ({author})
      </div>
      <div>
        <Link to={`/quote/${id}`}>Ir al detalle</Link>
      </div>
    </div>
  )
}

export default Quote