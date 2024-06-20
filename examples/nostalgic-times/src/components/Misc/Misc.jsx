import { useState } from 'react'

import styles from './Misc.module.css'

const Misc = () => {
  const year = 1989

  const [premium, setPremium] = useState(false)

  const getDescription = year => {
    if (year < 2000) {
      return (
        <p>Somos unos viejuners pero molamos mazo</p>
      )
    }
    else {
      return (
        <p>La juventud es el futuro (por ahora)</p>
      )
    }
  }

  return (
    <div>
      <h2 className={styles.title}>Bienvenidos al año { year }</h2>

      <div>
        <button onClick={() => setPremium(true)}>
          Pasar a premium
        </button>
      </div>

      {
        premium
        &&
        <h3>Este mensaje se autodestruirá</h3>
      }

      {/* ---- Método 1: Con funciones explícitas ---- */}
      {
        // Código JS que tiene que DEVOLVER código JSX
        // getDescription(year)
      }

      {/* ---- Método 2: Con operadores lógicos ---- */}
      <p>
      {
        year < 2000
        ?
        'Somos unos viejuners pero molamos mazo'
        :
        'La juventud es el futuro (por ahora)'
      }
      </p>
    </div>
  )
}

export default Misc