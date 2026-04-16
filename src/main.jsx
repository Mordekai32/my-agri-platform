import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import AgriPlatform from './components/Agri'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgriPlatform />
  </StrictMode>,
)
