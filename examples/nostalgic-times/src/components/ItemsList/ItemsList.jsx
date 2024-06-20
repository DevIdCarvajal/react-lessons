import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemsList = ({ items }) => {

  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    setTotalItems(items.length)
  }, [items])

  return (
    <div>
      {
        items?.length > 0
        ?
        items.map(item =>
          <div key={item.id}>
            <h4>{item.title}</h4>

            <Link to={ `/video/${item.id}` }>Ver más</Link>
          </div>
        )
        :
        <p>No hay frikadas viejunas</p>
      }

      <p>Total: { totalItems }</p>
    </div>
  )
}

export default ItemsList