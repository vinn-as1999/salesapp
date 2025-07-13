import { useState, useContext, useEffect } from 'react'
import Navigation from '../components/Navigation'
import BillingButton from '../components/BillingButton'
import { IoCheckmarkCircle } from "react-icons/io5"
import { ClientsContext } from '../contexts/ClientsContext'
import Empty from '../components/Empty'
import EditionMenu from '../components/EditionMenu'


function ClientsPage(props) {
  const { clients, setClients, getClients, searchClients } = useContext(ClientsContext);

  const id = localStorage.getItem('id');
  const [clientsList, setClientsList] = useState(clients);
  const [searchTerm, setSearchTerm] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const fieldClassName = name ? 'info-field has-content' : 'info-field';

  async function registerClient(event) {
    event.preventDefault();

    const requestBody = {
      id,
      client: name,
      contact,
      location,
      notes
    };

    setClients(prevClients => [...prevClients, requestBody]);

    try {
      const response = await fetch("http://localhost:5152/clients", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      console.log(data.client_data, id)
      getClients(id);

    } catch(error) {
      console.log('Erro: ', error);
      setClients(prev => prev.filter(c => {
        c.client !== name && c.contact !== contact
      }));
    }
  };

  async function handleEditClient(id) {
    console.log('editou cliente');
  };

  async function handleDeleteClient(id) {
    console.log('deletou cliente');
  };

  useEffect(() => {
    setClientsList(searchClients(searchTerm))
  }, [searchTerm])


  return (
    <>
      <main className={props.isMobile ? "clients-main mobile" : "clients-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Clientes</h2>

        <section className="clients-list">
          <form className="clients-list-form" onSubmit={(e) => registerClient(e)}>
            <div className={fieldClassName}>
              <label>Nome</label>
              <input autoFocus={true} 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder='ex: João' />
            </div>

            <div className={contact ? 'info-field has-content' : 'info-field'}>
              <label>Contato</label>
              <input 
                type="number" 
                value={contact} 
                onChange={(e) => setContact(e.target.value)}
                placeholder='ex: 1123456789' />
            </div>

            <div className={location ? 'info-field has-content' : 'info-field'}>
              <label>Local</label>
              <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                placeholder='ex: Eaton' />
            </div>
            
            <div className={notes ? 'info-field has-content' : 'info-field'}>
              <label>Observações</label>
              <input 
                type="text" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                placeholder='ex: Nenhuma' />
            </div>

            <div className='save-field'>
              <label>Salvar</label>
              <button className='save'>
                <IoCheckmarkCircle />
              </button>
            </div>
          </form>

          <div className="search-field">
            <input type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className='search-input'
              placeholder='Pesquisar cliente' />
          </div>

          <ul>
            {
              clientsList.length > 0
                ? clientsList.map((client, index) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        props.setEditClient(index);
                      }}
                      style={{ position: 'relative' }}
                    >
              {
                props.clientsTrigger === index ? (
                  // Modo edição (inputs)
                  <>
                    <div><input type="text" defaultValue={client.client} /></div>
                    <div><input type="text" defaultValue={client.contact} /></div>
                    <div><input type="text" defaultValue={client.location} /></div>
                    <div><input type="text" defaultValue={client.notes} /></div>
                  </>
                  ) : (
                    // Modo visualização (texto)
                    <>
                      <div>{client.client}</div>
                      <div>{client.contact}</div>
                      <div>{client.location}</div>
                      <div>{client.notes ? client.notes : "..."}</div>
                    </>
                )
              }

                <EditionMenu 
                  idx={index} 
                  editVariable={props.editClient} 
                  setEditFunction={props.setEditClient} 
                  edit={handleEditClient}
                  delete={handleDeleteClient}
                  trigger={props.clientsTrigger}
                  setTrigger={props.setClientsTrigger}
                />
              </li>
              ))
            : <Empty />
          }
          </ul>
        </section>

        <BillingButton />
      </main>
    </>
  )
}

export default ClientsPage;