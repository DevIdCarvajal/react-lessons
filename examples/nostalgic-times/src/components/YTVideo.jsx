import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import ThemeContext from '../contexts/ThemeContext'

const YTVideo = ({ items }) => {

  const isDark = useContext(ThemeContext)
  const { id } = useParams()
  const { title, url } = items.filter(item => item.id === Number(id))[0]

  return (
    <article style={{
      backgroundColor: isDark ? 'black' : 'white',
      color: isDark ? 'white' : 'black'
    }}>
      <h4>{ title }</h4>

      <iframe
        style={{ border: 0, width: 280, height: 157 }}
        src={ "https://www.youtube.com/embed/" + url }
        title={ title }
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
        "
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </article>
  )
}

export default YTVideo
