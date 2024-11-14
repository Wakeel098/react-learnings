import React from 'react'
import { useContext } from 'react'
import { UserTheme } from '../App'

const ChildC = () => {
   const {theme,setTheme}=useContext(UserTheme)


  const handleclick=()=>{

    if(theme==="light"){
        setTheme("dark")
    }
    else{
        setTheme("light")
    }

  }


  return (
    <div>
      
      <div>child c</div>

       <button onClick={handleclick}>Change Theme</button>


    </div>
  )
}

export default ChildC
