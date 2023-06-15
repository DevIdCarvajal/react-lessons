import { useState } from "react"

const HiddenText = () => {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {!showMessage ? "Mostrar" : "Ocultar"}
      </button>
      
      {
        showMessage
        &&
          <div>
            <h2>Example Text</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis, porro cupiditate accusamus nobis ducimus aspernatur rem dolor eius quaerat odit natus dignissimos quisquam amet atque, quo fugit mollitia obcaecati?</p>
          </div>
      }
    </div>
  )
}

export default HiddenText