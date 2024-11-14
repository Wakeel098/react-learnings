import React from 'react'

const ChildA = (props) => {
  return (
    <div>
       this is child a
       <input type="text"   onChange={(e)=>{
        props.setName(e.target.value)
       }}  />


    </div>
  )
}

export default ChildA
