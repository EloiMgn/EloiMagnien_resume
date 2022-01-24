import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './reset.css'
import App from './App/App'
import StoreProvider from './Components/Provider/Provider'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
