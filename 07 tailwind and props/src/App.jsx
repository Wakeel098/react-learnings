import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card' 
import Avatar from './components/avatar'
import Sidebar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-400' >Tailwind test</h1>
    <Card/>
    <Avatar device="Macbook"/>
    <Avatar device="Windows"/>
    <Sidebar dashboard="wakeel" themes="dark,light" />


    </>
  )
}

export default App
