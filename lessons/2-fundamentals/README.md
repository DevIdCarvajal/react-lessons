# 2. Fundamentos de React

- [Componentes](#componentes)
- [Props](#props)
- [Estado](#estado)
- [Hooks](#hooks)

## Componentes

Un componente es un fichero .jsx que puede tener las siguientes partes:

- Importación de aquello que necesita de otros módulos (en su caso)
- Una función que lo define y que devuelve el código JSX a preprocesar y renderizar
- Código JavaScript adicional (generalmente para tareas de inicialización, si las requiere)
- Exportación de la función

Los componentes forman un árbol de manera jerárquica llamándose unos a otros, desde el componente raíz (habitualmente `App.js`) y pudiendo tener todos los niveles que se necesiten para construir la aplicación.

Ejemplo de componente:

```jsx
import "./Movie.css"
import poster from "./images/her-movie-poster.jpg"

const title = "Her"
const year = 2013

const Movie = () => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Año: {year}</p>

      <img src={poster} alt={title} />
    </div>
  )
}

export default Movie
```

Se dice que React sigue el paradigma de la programación reactiva, por el cual la vista debe ser una consecuencia de los datos, lo que implica:

1. Mantener un estado consistente y coherente de los datos
2. Establecer una lógica de presentación a partir de esos datos

## Props

Las props son el equivalente a parámetros o argumentos que se pueden pasar a los componentes para que estos nazcan con un valor inicial para dichas props. Se indican en la declaración del componente: 
    
```jsx
const Movie = ({title, year}) => {
  // ...
}
```

Y se proporcionan al mismo cuando se le llama:

```jsx
<Movie title="Metropolis" year="1927">
```

## Estado

El estado son datos almacenados en memoria que perduran durante todo el ciclo de vida del componente, y de los que depende el renderizado condicional. Se crea mediante un `hook` (ver más adelante) llamado `useState`:

```jsx
import { useState } from 'react'

const Movie = () => {
  const [isRated, setIsRated] = useState(false)

  return (
    <p>{ isRated ? "Valorada" : "No valorada" }</p>
  )
}
```

## Hooks

Los hooks son funciones reutilizables definidas globalmente para toda la aplicación, capaces de tener su propio estado.

Ofrecen distintas funcionalidades de ayuda (al estilo de los llamados `helpers` en programación) y van precedidos en su nombre por el prefijo `use`.

React ofrece un catálogo de hooks de serie (como el ya citado más arriba `useState` para gestionar el estado del componente):

- useState
- useEffect
- useContext
- useMemo
- useRef

Además, es posible crear hooks personalizados para generar funciones superglobales reutilizables que sirvan para apoyar la lógica de presentación de otros componentes, desacoplando así el tratamiento de los datos de la vista.

Los hooks no deberían renderizar nada sino implementar puramente lógica, como por ejemplo trabajar con almacenamiento local o realizar peticiones contra un servidor de datos. Podría decirse informalmente que son "componentes sin renderización".
