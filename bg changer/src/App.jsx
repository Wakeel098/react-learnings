import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
   
  return (
       <div className="w-[100vw] h-[100vh]   flex justify-center duration-200 "   style={{backgroundColor:color}} >
            <div className='fixed bottom-3  flex-wrap gap-4 px-2 py-1 bg-white flex items-center justify-around rounded-lg'>
               <button onClick={()=>{
                return setcolor("red")
               }} className=" px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"red"}}>red</button>
               <button onClick={()=>setcolor("green")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"green"}}>green</button>
               <button onClick={()=>setcolor("blue")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"blue"}}>blue</button>
               <button onClick={()=>setcolor("black")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"black"}}>black</button>
               <button onClick={()=>setcolor("yellow")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"yellow"}}>yellow</button>
                <button onClick={()=>setcolor("pink")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"pink"}}>pink</button>
               <button onClick={()=>setcolor("indigo")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"indigo"}}>indigo</button>
                <button onClick={()=>setcolor("grey")} className="px-[8px] my-1 text-white flex items-center justify-center rounded-lg" style={{backgroundColor:"grey"}}>grey</button>
 
              
              
               

            </div>

           </div>
      
  )
}

export default App
