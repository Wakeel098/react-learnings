import { createContext, useContext, useState } from 'react'
import ChildA from './components/ChildA'
 import './App.css'


 const UserContext=createContext();






function App() {

  const[user,setName]=useState({name:"wakeel"})
   

  return (
     <>
     in parent:{user.name}



     
      


       <UserContext.Provider  value={user}>
       <ChildA    />               {/*   yeha pe childA k ander child b hai aur child b k ander child c That means teeno component wrap huwe => teeno consumer ban sakhte hai jab wo  chahe    */}
       </UserContext.Provider>

     </>
  )
}

export default App
export {UserContext}
