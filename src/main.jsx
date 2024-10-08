import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/assets/styels/style.css'
import '../src/assets/styels/media.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
