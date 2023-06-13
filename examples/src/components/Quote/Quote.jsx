import bulletImg from "./bullet.png"
import "./Quote.css"

const Quote = ({text, image}) => {
  
  return (
    <div className="Quote">
      <div>
        <img
          src={image}
          alt=""
          style={{ width: "240px" }}
        />
      </div>
      <cite>
        <img src={bulletImg} alt="·" />
        {text}
      </cite>
    </div>
  )
}

export default Quote