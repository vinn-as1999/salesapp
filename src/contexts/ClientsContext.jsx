import { createContext, useEffect, useState } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({children}) => {
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([]);
  const [pending, setPending] = useState([]);
  const [pendingValues, setPendingValues] = useState([]);


  async function getClients() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (!id || !token) return;

    try {
      const response = await fetch(`http://localhost:5152/clients/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) return;

      const data = await response.json();

      setClients(data);

    } catch (error) {
      console.error(error);
    }
  };


  async function getSales() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token")

    if (!id || !token) return;

    const response = await fetch("http://localhost:5152/sales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
  };


  function searchClients(name) {
    return clients.filter(client => 
      client.client.toLowerCase()
        .includes(name.toLowerCase())
    )
  };


  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") !== null;

    if (isLoggedIn) {
      getClients(localStorage.getItem("id"));
    }
  }, []);



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

