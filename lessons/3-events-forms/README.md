# 3. Manejo de eventos y formularios

- [Eventos](#eventos)
- [Formularios](#formularios)

## Eventos

En React los eventos se manejan de forma diferente a como se hace en VanillaJS.

Ejemplo:

```jsx
import { useState } from 'react'

const SheepCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Has soñado con {count} ovejas eléctricas</p>

      <button onClick={() => setCount(count + 1)}>
        Sueña con otra oveja
      </button>
    </div>
  )
}

export default SheepCounter
```

Es decir, se crean funciones manejadoras que se asocian al evento directamente en el elemento JSX que lo dispara.

Si se quieren pasar parámetros, es conveniente crear una función auxiliar.

Ejemplo:

```jsx
const HelloExample = () => {

  const sayHelloTo = (name) => {
    console.log(`Hola, ${name}!`)
  }

  return (
    <div>
      <button onClick={() => sayHelloTo('Deckard')}>
        Saludar
      </button>
    </div>
  )
}

export default HelloExample
```

## Formularios

En React los formularios deben ser controlados, es decir, aquellos en los que los valores de los inputs son manejados por el estado del componente, siendo este actualizado con los cambios que haga el usuario en dichos inputs.

Ejemplo:

```jsx
import { useState } from 'react'

const FormExample = () => {
  const [name, setName] = useState('')

  const handleForm = () => {
    // Procesamiento de los datos (name)
    // ...
  }

  return (
    <div>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button onClick={handleForm}>Enviar</button>
    </div>
  )
}

export default FormExample
```

Para realizar una validación de los datos, mostrando mensajes de error, simplemente hay que comprobar que los valores de los estados cumplan las condiciones de validación y se actualizan estados de mensajes de error según proceda.

Ejemplo:

```jsx
import { useState } from 'react'

const FormExample = () => {
  const [name, setName] = useState('')
  const [errorNameMessage, setErrorNameMessage] = useState(false)

  const validateForm = () => {
    if (name.length < 10) {
      // Procesamiento de los datos
      // ...
      setErrorNameMessage(false)
    }
    else {
      setErrorNameMessage(true)
    }
  }

  return (
    <div>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        { errorNameMessage && <p>Nombre incorrecto</p> }
      </label>

      <button onClick={handleForm}>Enviar</button>
    </div>
  )
}

export default FormExample
```
