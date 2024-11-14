import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 import ChildA from './components/childA'
 import ChildB from './components/childB'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <div id='parent'>
        this is parrent container:{name}
        <ChildA  name={name} setName={setName} />
        <ChildB  name={name} setName={setName} /> 
         
      </div>
    </>
  )
}

export default App
