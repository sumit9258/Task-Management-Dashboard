import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store } from '../store.js'
import Navbar from './Componants/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <BrowserRouter>
<Navbar/>
<StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
</Provider>
)
