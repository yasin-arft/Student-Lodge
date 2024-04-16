import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OurRouterProvider from './Providers/OurRouterProvider'
import AuthContextProvider from './Providers/AuthContextProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <OurRouterProvider />
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
