import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App, { appLoader } from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Main, { mainLoader } from './componentes/Main.jsx'

const root = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    children: [{
      path: '',
      element: <Main />,
      loader: mainLoader
    }]
  },
  {
    path: '/br',
    element: <App />,
    loader: appLoader,
    children: [{
      path: '',
      element: <Main />,
      loader: mainLoader
    }]
  },
  {
    path: '/en',
    element: <App />,
    loader: appLoader,
    children: [{
      path: '',
      element: <Main />,
      loader: mainLoader
    }]
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
