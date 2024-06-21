import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SecondaryTitle = styled.h4`
  color: crimson;
  text-decoration: underline;
`

const ItemsListWR = () => {
  const [totalItems, setTotalItems] = useState(0)

  const items = useSelector(state => state.items)

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
            <SecondaryTitle>{item.title}</SecondaryTitle>

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

export default ItemsListWR