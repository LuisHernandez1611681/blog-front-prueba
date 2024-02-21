import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewArticle from './views/NewArticle.tsx'
import { NetworkStatusProvider } from './context/NetworkStatusContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/new-article',
        element: <NewArticle />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NetworkStatusProvider>
      <RouterProvider router={router} />
    </NetworkStatusProvider>
  </React.StrictMode>,
)
