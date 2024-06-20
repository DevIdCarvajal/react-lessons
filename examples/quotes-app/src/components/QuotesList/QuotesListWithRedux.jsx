import './QuotesList.scss'

import Quote from '../Quote/Quote'

import { useSelector } from 'react-redux'

const QuotesListWithRedux = () => {

  const quotes = useSelector(state => state.quotes)

  return (
    <ul className="QuotesList">
      {
        quotes.length > 0
        ?
        quotes.map(quote =>
          <Quote
            key={quote.id}
            id={quote.id}
            text={quote.text}
            author={quote.author ? quote.author : 'Anónimo'}
            premium={quote.premium}
          />
        )
        :
        <li>No hay citas</li>
      }
    </ul>
  )
}

export default QuotesListWithRedux
