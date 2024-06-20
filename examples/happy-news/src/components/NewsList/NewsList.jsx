import { useState, useEffect, useContext } from 'react'

import './NewsList.css'

import New from '../New/New'

import ThemeContext from '../../contexts/ThemeContext'

const NewsList = ({ news }) => {

  const [totalNews, setTotalNews] = useState(0)

  const isDark = useContext(ThemeContext)

  useEffect(() => {
    if (news?.length > 0) {
      setTotalNews(news.length)
    }
    else {
      setTotalNews(0)
    }
  }, [news])

  const getOddOrEven = () => {
    if (totalNews % 2 === 0) {
      return 'bien'
    }
    else {
      return 'mal'
    }
  }

  return (
    <div className={ `NewsList ${isDark ? 'darkTheme' : 'lightTheme'}` }>
      {
        totalNews > 0
        ?
        news.map((item, index) =>
          <New
            key={index}
            id={item.id}
            title={item.title}
            text={item.text}
            image={item.image}
            caption={item.caption}
          />
        )
        :
        <p>No hay noticias</p>
      }

      <p>Total: { totalNews }</p>

      {/* <p>{ getOddOrEven() }</p> */}

      {
        totalNews > 0
        &&
        <p>Hay noticias { totalNews % 2 === 0 ? '' : 'im' }pares</p>
      }
    </div>
  )
}

export default NewsList
