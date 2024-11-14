 import React, { useState } from 'react'
  
 import './panel.css'

 const Panel = ({title,children , dspl,onShow}) => {
    //  const [displ, setDispl]= useState(false)



   return (
     <div id='box'>

        <h3>{title}</h3> 

        
       { dspl ? (<p>{children}</p>) :  (<button onClick={onShow} >show</button>) }

       {/* <p>{children}</p> */}
       
     </div>
   )
 }
 
 export default Panel
 