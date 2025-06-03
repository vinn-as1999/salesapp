import { useState, useContext } from 'react'
import Navigation from '../components/Navigation'
import BillingButton from '../components/BillingButton'
import { IoCheckmarkCircle } from "react-icons/io5"
import { ClientsContext } from '../contexts/ClientsContext'
import Empty from '../components/Empty'

function ClientsPage(props) {
  const { clients, setClients } = useContext(ClientsContext);

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [notes, setNotes] = useState('')
  const fieldClassName = name ? 'info-field has-content' : 'info-field';

  return (
    <>
      <main className={props.isMobile ? "clients-main mobile" : "clients-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Clientes</h2>

        <section className="clients-list">
          <form className="clients-list-form">
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

          <ul>
            {
              // conditional rendering
              clients.length > 0
                ? clients.map((client, index) => (
                <>
                  <li key={index}>{client.name}</li>
                  <li>{client.contact}</li>
                  <li>{client.location}</li>
                  <li>{client.notes}</li>
                </>
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