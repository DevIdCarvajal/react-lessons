import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const SecondaryTitle = styled.h2`
  color: red;
  font-style: italic;
`

const NewDetailWithRedux = () => {

  const news = useSelector(state => state.news)

  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('(Sin título)')

  useEffect(() => {
    const data = news.filter(item => item.id === Number(id))

    if (data?.length === 1) {
      setTitle(data[0].title)
    }
    else {
      setTitle('(Sin título)')
    }
  }, [news])

  return (
    <article>
      <SecondaryTitle>{ title }</SecondaryTitle>
      
      <p>Otras movidas</p>

      <button onClick={() => navigate(-1)}>Volver atrás</button>
    </article>
  )
}

export default NewDetailWithRedux
