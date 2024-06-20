import styles from './QuoteDetail.module.css'

import { useParams, useNavigate } from 'react-router-dom'

const QuoteDetail = ({ quotes }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const quoteData = quotes.filter(quote => quote.id === Number(id))
  
  return (
    <div className={styles.center}>
      {
        quoteData?.length === 1
        &&
        <>
          <h1 className={styles.darkTheme}>{ quoteData[0].text }</h1>

          <h2>{ quoteData[0].author }</h2>

          <p>{ quoteData[0].premium ? 'PREMIUM' : 'NORMAL' }</p>
        </>
      }

      <button onClick={() => navigate(-1)}>Volver Atrás</button>
    </div>
  )
}

export default QuoteDetail
