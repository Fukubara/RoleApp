// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Entrar from './Pages/Entrar'
import Participar from './Pages/Participar'
import Adicionar from './Pages/Adicionar'

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Entrar/> },
    { path: "/Participar/:id", element: <Participar/> },
    { path: "/Adicionar/:id", element: <Adicionar/> },
  ])

  return (
    <div className="card">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
