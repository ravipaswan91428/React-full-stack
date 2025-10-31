import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutLanding from './Components/LayoutLanding'
import LandingPage from './Components/LandingPage'
import Recepi from './Components/Recipe'


const router = createBrowserRouter([
  {
    path:'/',
    element:<LayoutLanding />,
    children:[
      {
        path:'',
        element:<LandingPage />
      },
      {
        path:'/recepi',
        element:<Recepi/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
