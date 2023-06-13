const Header = () => {
  
  return (
    <div>
      <h1>{ heading }</h1>

      <button onClick={changeMessage}>Cambiar mensaje</button>
    </div>
  )
}

export default Header