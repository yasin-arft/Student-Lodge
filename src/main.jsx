import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OurRouterProvider from './Providers/OurRouterProvider'
import AuthContextProvider from './Providers/AuthContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <OurRouterProvider />
    </AuthContextProvider>
  </React.StrictMode>,
)
