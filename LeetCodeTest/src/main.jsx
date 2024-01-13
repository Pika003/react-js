import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Animation from './components/Animation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Animation/>
  </React.StrictMode>,
)
