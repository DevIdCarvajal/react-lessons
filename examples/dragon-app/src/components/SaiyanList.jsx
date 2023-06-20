import { useSelector } from "react-redux"

import Character from "./Character"
import SaiyanForm from "./SaiyanForm"

const SaiyanList = () => {

  // --------- Get only saiyans from Redux ---------
  const saiyans = useSelector(state => state.characters)

  return (
    <div>
      <ul>
        {
          saiyans.map((character, index) =>
            <Character charData={character} key={index} />
          )
        }
      </ul>

      <SaiyanForm />
    </div>
  )
}

export default SaiyanList
