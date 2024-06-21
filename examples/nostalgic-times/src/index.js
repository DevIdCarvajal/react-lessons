import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppWR from './AppWR'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <App /> */}
      <AppWR />
    </Provider>
  </BrowserRouter>
)

reportWebVitals()
