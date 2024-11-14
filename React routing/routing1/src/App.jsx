import { useState } from 'react'
import './App.css'

import {RouterProvider,
  createBrowserRouter
} from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Params from './components/Params'
import Mock from './components/Mock'
import Courses from './components/Courses'
 

function App() {

  const router=createBrowserRouter(

    [
      {path:'/',
       element: <div>
        <Navbar/>
        <Home/>
       </div>
      },
      {path:'/about',
        element: <div>
        <Navbar/>
        <About/>
       </div>
       },
       {path:'/dashboard',
        element: <div>
        <Navbar/>
        <Dashboard/>
       </div>,
       children:
       [
        {
          path:'mock',
          element: <div>
         
          <Mock/>
         </div>,

        },
        {
          path:'courses',
          element: <div>
           
          <Courses/>
         </div>,

        }
       ]
       },
       {path:'/student/:id',
        element: <div>
        <Navbar/>
        <Params/>
       </div>
       },

       {
        path:'*',
        element: <div>
          <h1>404-page not found</h1>
          <h3>ye toh sahi url nahi hai re baba</h3>
          
        </div>
       }



    ] 

  )
  

  return (
    <>
    

    <RouterProvider router={router} />
    
    </>
  )
}

export default App
