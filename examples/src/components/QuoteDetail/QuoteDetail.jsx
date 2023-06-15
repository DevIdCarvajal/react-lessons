import { useParams } from "react-router-dom"

const QuoteDetail = () => {
  const { id } = useParams()

  return (
    <div className="QuoteDetail">
      Hola, soy la cita {id}

      {/* <p>{text}</p>
      <p>{author}</p> */}
    </div>
  )
}

export default QuoteDetail