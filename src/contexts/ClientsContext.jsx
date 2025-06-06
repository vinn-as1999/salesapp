import { createContext, useState } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({children}) => {
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([{client: 'joão marcos dos santos', product: 'paçoca', value: 10, date: '01/01'}]);
  const [pending, setPending] = useState([]);
  const [pendingValues, setPendingValues] = useState([]);

  return (
    <ClientsContext.Provider
      value={{
        clients, setClients,
        pending, setPending,
        pendingValues, setPendingValues,
        sales, setSales
      }}>
      {children}
    </ClientsContext.Provider>
  )
};

export { ClientsProvider, ClientsContext }
