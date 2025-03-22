import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.jsx'
import Home from './pages/home.jsx'
import Gallery from './pages/gallery.jsx'
import About from './pages/about.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'home', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'gallery', element: < Gallery /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
