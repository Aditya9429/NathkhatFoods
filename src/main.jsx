import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ApiContext from './context/ApiContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiContext>
    <HashRouter>
     <App />
    </HashRouter>
    </ApiContext>
   
  </StrictMode>,
)
