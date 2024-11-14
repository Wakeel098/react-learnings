import { useState,useContext } from 'react'
import './App.css'

import ChildC from './components/ChildC'
import { createContext } from 'react'

const UserTheme=createContext();
 


function App() {
  const [theme, setTheme] = useState("light")

  return (
  <>
  <div className="container"  style={{backgroundColor:(theme==="light")?"lightgoldenrodyellow":"gray"}}>
    <div>
    helo

<UserTheme.Provider value={{theme ,setTheme}}    >
<ChildC />

</UserTheme.Provider>


  


  </div>
  </div>
  
  </>
  )
}

export default App
export {UserTheme}