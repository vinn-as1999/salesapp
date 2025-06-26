import { useState, createContext } from 'react';


const UserContext = createContext()

function UserProvider({children}) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider 
      value={{isAdmin, setIsAdmin}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }