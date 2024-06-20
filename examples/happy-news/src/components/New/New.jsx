import { Link } from 'react-router-dom'

import './New.scss'

const New = ({ id, title, text, image, caption }) => {

  return (
    <article className="New">
      <h4>{title}</h4>
      
      <p>{text}</p>

      <figure>
        <img src={image} alt="" />
        <figcaption>{caption}</figcaption>
      </figure>

      <Link to={`/new-detail/${id}`}>Ver más</Link>
    </article>
  )
}

export default New
