import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingLayout from './Pages/Landing_Pages/LandingLayout'
import LandingPage from './Pages/Landing_Pages/LandingPage'
import Recipe from './Pages/Landing_Pages/Recipe'
import RecipeDetails from './Pages/Landing_Pages/RecipeDetails'
import ErrorPage from './Pages/Landing_Pages/Error'

const router = createBrowserRouter(
  [
    {path:"/",
    element:<LandingLayout />,
    children:[
      {
        path:"",
        element:<LandingPage />
      },
      {
        path:"/recipe",
        element:<Recipe />
      },
      {
        path:"/recipe/:id",
        element:<RecipeDetails />
      }]},
    {
      path:"*",
      element:<ErrorPage />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
