import { createContext, useState } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({children}) => {
const [clients, setClients] = useState([
    {
      name: 'João Marcos',
      contact: '(11) 91234-5678',
      location: 'São Paulo - SP',
      notes: 'Cliente antigo, prefere contato por WhatsApp.'
    },
    {
      name: 'Maria Aparecida',
      contact: '(21) 99876-5432',
      location: 'Rio de Janeiro - RJ',
      notes: 'Comprou recentemente, interessada em promoções.'
    },
    {
      name: 'Carlos Eduardo',
      contact: '(31) 98765-4321',
      location: 'Belo Horizonte - MG',
      notes: 'Solicitou orçamento para grande volume.'
    },
    {
      name: 'Fernanda Souza',
      contact: '(41) 97654-3210',
      location: 'Curitiba - PR',
      notes: 'Cliente nova, enviou feedback positivo.'
    },
    {
      name: 'Rafael Oliveira',
      contact: '(51) 96543-2109',
      location: 'Porto Alegre - RS',
      notes: 'Sempre compra no começo do mês.'
    },
    {
      name: 'Amanda Ribeiro',
      contact: '(71) 95432-1098',
      location: 'Salvador - BA',
      notes: 'Gosta de produtos artesanais.'
    },
  ]);

  const [sales, setSales] = useState([
    { saleId: 1, client: 'João Marcos dos Santos', product: 'Paçoca', value: 10, date: '01/01' },
    { saleId: 2, client: 'Maria Aparecida Lima', product: 'Coxinha', value: 8, date: '03/01' },
    { saleId: 3, client: 'Carlos Eduardo', product: 'Refrigerante', value: 5, date: '04/01' },
    { saleId: 4, client: 'Fernanda Souza', product: 'Brigadeiro', value: 4, date: '05/01' },
    { saleId: 5, client: 'Rafael Oliveira', product: 'Bolo de Cenoura', value: 15, date: '06/01' },
    { saleId: 6, client: 'Amanda Ribeiro', product: 'Empada', value: 6, date: '08/01' },
    { saleId: 7, client: 'Lucas Martins', product: 'Guaraná', value: 7, date: '09/01' },
    { saleId: 8, client: 'Patrícia Gomes', product: 'Pastel de Carne', value: 12, date: '10/01' },
    { saleId: 9, client: 'Bruno Fernandes', product: 'Quindim', value: 9, date: '12/01' },
    { saleId: 10, client: 'Larissa Alves', product: 'Torta de Limão', value: 18, date: '14/01' },
    { saleId: 11, client: 'Thiago Silva', product: 'Pudim', value: 13, date: '15/01' },
    { saleId: 12, client: 'Juliana Castro', product: 'Enroladinho de Salsicha', value: 7, date: '17/01' },
    { saleId: 13, client: 'Eduarda Melo', product: 'Esfirra', value: 11, date: '19/01' },
    { saleId: 14, client: 'Gustavo Rocha', product: 'Suco Natural', value: 6, date: '20/01' },
    { saleId: 15, client: 'Camila Nogueira', product: 'Tapioca', value: 8, date: '21/01' },
  ]);

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
