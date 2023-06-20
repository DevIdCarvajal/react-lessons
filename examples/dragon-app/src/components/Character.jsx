import { useState, useEffect } from "react"
import "./Character.scss"

const Character = ({charData}) => {
  const [special, setSpecial] = useState(false)
  const [myColor, setMyColor] = useState("black")

  useEffect(() => {
    setMyColor(charData.id % 2 === 0 ? "yellow" : "black")
  }, [charData])
  
  return (
    <li className={`character ${myColor} ${special ? "tached" : ""}`} onClick={() => setSpecial(!special)}>{charData.name}</li>

    // <li style={{color: myColor}}>{charData.name}</li>
  )
}

export default Character