import './Home.css'

import styled from 'styled-components'

const MainTitle = styled.h1`
  color: crimson;
  margin-top: 10px;
`

const Home = () => {
  const myName = "David"
  let myAge = 42
  
  return (
    <div>
      <MainTitle>Hola{ myName && `, ${myName}` }</MainTitle>

      {
        myAge < 18
        ?
        <h2>No puedes pasar</h2>
        :
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde error perspiciatis maiores fugit eaque natus asperiores, ipsam rerum animi vitae, vero, nobis ab dolor cupiditate fugiat. Magni, nobis odio.</p>
      }
    </div>
  )
}

export default Home
