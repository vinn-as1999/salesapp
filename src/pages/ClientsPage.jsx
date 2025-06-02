import {useState} from 'react'
import Navigation from '../components/Navigation'
import BillingButton from '../components/BillingButton'
import { IoCheckmarkCircle } from "react-icons/io5"

function ClientsPage(props) {
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
              <label>Observa es</label>
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
            <li>
              <div>João</div>
              <div>12345678</div>
              <div>Local</div>
              <div>Observações</div>
            </li>
          </ul>
        </section>

        <BillingButton />
      </main>
    </>
  )
}

export default ClientsPage;