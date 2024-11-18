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

    import "./Movie.css";
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

## Props

Las props son el equivalente a parámetros o argumentos que se pueden pasar a los componentes para que estos nazcan con un valor inicial para dichas props. Se indican en la declaración del componente: 
    
    const Movie = ({title, year}) => {
      // ...
    }

Y se proporcionan al mismo cuando se le llama:

    <Movie title="Metropolis" year="1927">

## Estado

El estado son datos almacenados en memoria que perduran durante todo el ciclo de vida del componente, y de los que depende el renderizado condicional. Se crea mediante un `hook` (ver más adelante) llamado `useState`:

    import { useState } from 'react'
    
    const Movie = () => {
      const [isRated, setIsRated] = useState(false)

      return (
        <p>
        {
          isRated ? "Valorada" : "No valorada"
        }
        </p>
      )
    }

## Hooks

Los hooks son funciones superglobales que pueden ofrecer distintas funcionalidades de ayuda (`helpers`) y pueden tener su propio estado. Van precedidos en su nombre por el prefijo `use`.

React ofrece un catálogo de hooks de serie (como el ya citado más arriba `useState` para gestionar el estado del componente):

- useState
- useEffect
- useContext
- useMemo
- useRef

Además, es posible crear hooks personalizados para generar funciones globales reutilizables para la lógica de otros componentes.

Los hooks no deberían renderizar nada sino implementar puramente lógica, como por ejemplo trabajar con almacenamiento local o realizar peticiones contra un servidor de datos.
