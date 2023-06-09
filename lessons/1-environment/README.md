# 1. Instalación, arquitectura y JSX

## Índice

[0. Prerrequisitos](#0-prerrequisitos)  
[1. Nuestra primera SPA con React](#1-nuestra-primera-spa-con-react)  
[2. Arquitectura por componentes](#2-arquitectura-por-componentes)  
[3. Renderizado condicional](#3-renderizado-condicional)

## 0. Prerrequisitos

- Navegador Web: Chrome, Firefox, Edge, etc.
- Extensión React DevTools: [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Consola/Terminal: PowerShell, Git Bash, etc.
- Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Node.js / npm: [https://nodejs.org/es/download](https://nodejs.org/es/download)
- Git: [https://git-scm.com/download/](https://git-scm.com/download/)

## 1. Nuestra primera SPA con React

1. Crear la aplicación:

  - Método 1:
    
        npx create-react-app hello-world
  
  - Método 2:
    
    (Solo la primera vez)

        npm install --global create-react-app
    
    (Para cada proyecto)

        create-react-app hello-world

2. Modificar el fichero `hello-world/src/App.js`:

        import './App.css';

        const App = () => {
          return (
            <div className="App">
              <h1>Hola Mundo</h1>
            </div>
          );
        }

        export default App;

3. Lanzar la aplicación:

        cd hello-world
        npm start

## 2. Arquitectura por componentes

![Árbol de componentes](components-tree.png "Árbol de componentes")

## 3. Renderizado condicional

React utiliza una extensión de JavaScript llamada JSX, que permite definir de manera intercalada la lógica de presentación con los contenidos HTML a renderizar.

Todo componente de React devuelve el código JSX que la librería preprocesará antes de transpilarlo a HTML estándar, generando el código final que enviar al navegador.

Esto quiere decir que es posible leer valores almacenados en memoria o aplicar estructuras de control de flujo para la construcción de los elementos y contenidos HTML:

    const Spoiler = () => {
      const hidden = false
      const synopsis = "Está bien"

      return (
        <div>
          { hidden ? "Spoiler alert" : synopsis }
        </div>
      )
    }