import { createContext, useEffect, useState } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({children}) => {
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([]);
  const [pending, setPending] = useState([]);
  const [pendingValues, setPendingValues] = useState([]);


  async function getClients(id) {
    try {
      if (!id) id = localStorage.getItem("id");

      const response = await fetch(`http://localhost:5152/clients/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) return;

      const data = await response.json();

      console.log(data);
      setClients(data);

    } catch (error) {
      console.error(error);
    }
  };

  function searchClients(name) {
    return clients.filter(client => 
      client.client.toLowerCase().includes(name.toLowerCase())
    );
  };

  useEffect(() => {getClients(localStorage.getItem("id"))}, [])

  return (
    <ClientsContext.Provider
      value={{
        clients, setClients,
        pending, setPending,
        pendingValues, setPendingValues,
        sales, setSales,
        getClients, searchClients
      }}>
      {children}
    </ClientsContext.Provider>
  )
};

export { ClientsProvider, ClientsContext }

