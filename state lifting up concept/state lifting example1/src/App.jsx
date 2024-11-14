import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Panel from './components/Panel'

function App() {
  const [dspl, setDspl] = useState(0)

  return (
     <>
       
      <Panel title="About" 
       dspl={dspl===0} 
       onShow={()=>{
        setDspl(0)
       }}
       >
         <p>
          My name is wakeel ahmad kumar student of Nit Srinagar
         </p>

         
      </Panel>

      <Panel title="Contact Details" 
      dspl={dspl===1} 
      onShow={()=>{
       setDspl(1)}}
      
      >

            <p>contact me on gmail : wakeel@gmail.com  <br/> or contact me: 995459552 </p>
         
         </Panel>
     
     </>
  )
}

export default App
