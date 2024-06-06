import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const root = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/br',
    element: <App />
  },
  {
    path: '/en',
    element: <App />
  },
  {
    path: '/es',
    element: <Navigate to='/' />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
)
