import dbImg from "../assets/images/dragon-ball.jpg"

const Header = ({titleApp, maximum, increaseMaximum}) => {
  return (
    <div>
      <h1>{titleApp}</h1>
      <img className="poster" src={dbImg} alt="Imagen de Goku" />

      <p className="red">{maximum}</p>
      <button onClick={increaseMaximum}>Incrementar</button>
    </div>
  )
}

export default Header