import {useState} from 'react'
import Navigation from '../components/Navigation'
import BillingButton from '../components/BillingButton'
import { IoCheckmarkCircle } from "react-icons/io5"

function ClientsPage(props) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [notes, setNotes] = useState('')

  return (
    <>
      <main className={props.isMobile ? "clients-main mobile" : "clients-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Clientes</h2>

        <section className="clients-list">
          <form className="clients-list-form">
            <div className={`info-field ${name ? 'has-content' : ''}`}>
              <label>Nome</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={`info-field ${contact ? 'has-content' : ''}`}>
              <label>Contato</label>
              <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>

            <div className={`info-field ${location ? 'has-content' : ''}`}>
              <label>Local</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            
            <div className={`info-field ${notes ? 'has-content' : ''}`}>
              <label>Observações</label>
              <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
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