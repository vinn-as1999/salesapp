import { createContext, useState } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({children}) => {
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([]);
  const [pending, setPending] = useState([]);
  const [pendingValues, setPendingValues] = useState([]);

  // o useEffect vai puxar os dados dos clientes ao montar o componente

  // a partir daí, ele vai monitorar a lista de clientes e atualizar o estado quando houver mudança
  
  // o front-end deve atualizar antes de enviar a requisição ao back-end

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

