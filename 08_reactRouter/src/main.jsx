import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'
import GitPage from './Components/GitPage.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />,
        children:[
          {
            path:":gitUserName",
            element: <GitPage />
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

function ErrorPage (){
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="text-6xl text-red-600">Your are in the wrong page.</h1>
    </div>
  )
}
