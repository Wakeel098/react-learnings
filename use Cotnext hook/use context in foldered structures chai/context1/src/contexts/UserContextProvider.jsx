import React from 'react'
import UserKaContext from './UserContext'

 

const UserContextProvider = ({children}) => {

    const [user,setUser]=React.useState("wakeel")

  return (
    <div>
        <UserKaContext.Provider  value={}>
            {children}
        </UserKaContext.Provider>
      
    </div>
  )
}

export default UserContextProvider
