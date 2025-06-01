import React from 'react'
import Navigation from '../components/Navigation'
import { IoCheckmarkCircle } from 'react-icons/io5'

function SalesPage(props) {
  return (
    <>
      <main className={props.isMobile ? "sales-main mobile" : "sales-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Vendas</h2>

        <section className="sales-list-form">
          <div className="info-field">
            <label htmlFor="">Cliente</label>
            <input type="text" />
          </div>

          <div className="info-field">
            <label htmlFor="">Produto</label>
            <input type="text" />
          </div>

          <div className="save-field">
            <label htmlFor="">Registrar</label>
            <button className='save'>
              <IoCheckmarkCircle />
            </button>
          </div>
        </section>

        <section className='sales-list'>
          <ul>
            <li>
              <span>Nome</span>
              <span>Produto</span>
              <span>Valor</span>
              <span>Data</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default SalesPage