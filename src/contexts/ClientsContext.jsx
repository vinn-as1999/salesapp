import { createContext, useState } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({children}) => {
  const [clients, setClients] = useState([]);

  return (
    <ClientsContext.Provider
      value={{
        clients, setClients
      }}>
      {children}
    </ClientsContext.Provider>
  )
};

export { ClientsProvider, ClientsContext }
