import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAsteroids } from '../slices/asteroids/asteroidsSlice'

import useLocalStorage from '../hooks/useLocalStorage'

const Asteroids = () => {
  const dispatch = useDispatch()
  const asteroids = useSelector(state => state.asteroids)

  const [localStorage, setLocalStorage] = useLocalStorage('asteroids', null)

  useEffect(() => {
    if (!localStorage) {
      setLocalStorage([])
    }
  }, [])

  useEffect(() => {
    dispatch(fetchAsteroids())
  }, [])

  return (
    <div>
      <h2>Datos de la API</h2>

      <ul>
        {
          asteroids.map((asteroid, index) =>
            <li key={index} style={{
              color: asteroid.warning ? "red": "black"
            }}>
              {asteroid.name}
              <button onClick={() => setLocalStorage([...localStorage, asteroid])}>Guardar</button>
            </li>
          )
        }
      </ul>

      <h2>Datos guardados</h2>

      <ul>
        {
          localStorage
          &&
          localStorage.map((asteroid, index) =>
            <li key={index} style={{
              color: asteroid.warning ? "red": "black"
            }}>
              {asteroid.name}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Asteroids
