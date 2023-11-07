import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './components/Nav/Nav.jsx'
import './primary-styles/body.css'
import './primary-styles/reset.css'
import Header from './components/Nav/header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)