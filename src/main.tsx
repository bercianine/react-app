import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './stylesheets/App.css'
import './stylesheets/Navbar.css'
import './stylesheets/Carousel.css'
import './stylesheets/Section.css'
import './stylesheets/Button.css'
import './stylesheets/Footer.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
