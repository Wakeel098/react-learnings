import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigateTo=useNavigate();

    const handleclick=()=>{
        navigateTo('/dashboard')
    }



  return (
    <div>
      
      heloo
      this is about page
      <button onClick={handleclick}>click move to dashborad</button>
    </div>
  )
}

export default About
