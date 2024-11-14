import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigation=useNavigate();

    const handleclick=()=>{
        navigation('/about')

    }

  return (
    <div>
        hello this is home page

        <button onClick={handleclick}>move to about page</button>
      
    </div>
  )
}

export default Home
