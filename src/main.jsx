import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import ProfileCard from './components/Card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCard />
  </StrictMode>,
)
