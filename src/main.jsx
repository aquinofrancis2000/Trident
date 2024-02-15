import React from 'react'
import ReactDOM from 'react-dom/client'
import Config from './Pages/Config.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import NavigationBar from './components/Navigation.jsx'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <NavigationBar/>
  </React.StrictMode>,
  
)
