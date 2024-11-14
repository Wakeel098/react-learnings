import React from 'react'
import './navbar.css'
import { Link,NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <ul>
             < NavLink to='/'
              className={({isActive})=>
                isActive?"active-link" : " "

             }  style={{ textDecoration: 'none' }}>Home</ NavLink>
             < NavLink 
             className={({isActive})=>
                isActive?"active-link"  : " "

             }
              to='/about' style={{ textDecoration: 'none' }}>About</ NavLink>
             < NavLink 
                 className={({isActive})=>
                    isActive?"active-link" : " "
    
                 }
             style={{ textDecoration: 'none' }}  to='/dashboard'>Dashboard</ NavLink>
        </ul>
      
    </div>
  )
}

export default Navbar
