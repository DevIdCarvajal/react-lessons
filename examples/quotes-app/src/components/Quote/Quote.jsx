import { useContext } from 'react'
import { Link } from 'react-router-dom'

import './Quote.css'

import AuthContext from '../../contexts/authContext'

const Quote = ({ id, text, author, premium }) => {
  const { isLogged } = useContext(AuthContext)

  return (
    <>
    {
      (!premium || premium && isLogged)
      &&
      <li>{ text } ({ author }) <Link to={`/quote/${id}`}>More</Link></li>
    }
    </>
  )
}

export default Quote
