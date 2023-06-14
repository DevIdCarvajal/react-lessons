import bulletImg from "./bullet.png"
import "./Quote.css"

const Quote = ({text, image, author}) => {
  return (
    <div className="Quote">
      <div>
        <img
          src={image}
          alt=""
          style={{ width: "240px" }}
        />
      </div>
      <div>
        <cite>
          <img src={bulletImg} alt="·" />
          {text}
        </cite>
      </div>
      <div>
        ({author})
      </div>
    </div>
  )
}

export default Quote