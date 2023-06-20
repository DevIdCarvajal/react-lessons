import { useParams } from "react-router-dom"

const CharacterDetail = () => {

  const { id } = useParams()

  return (
    <div>
      Soy el personaje número { id }
    </div>
  )
}

export default CharacterDetail