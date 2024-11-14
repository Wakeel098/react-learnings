import React,{useContext} from 'react'
import {UserContext} from '../App' 

const ChildC = () => {
   
   const user=useContext(UserContext)

  return (
    <div>
     in c:   {user.name}
        hello
      
    </div>
  )
}

export default ChildC
