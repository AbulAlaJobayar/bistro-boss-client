import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/Routers'
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Provider/AuthProviders'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <AuthProviders>
   <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
 
   </AuthProviders>
  </React.StrictMode>,
)
