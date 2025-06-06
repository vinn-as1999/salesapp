import { useContext } from 'react'
import { ClientsContext } from '../contexts/ClientsContext'
import { IoCheckmarkCircle } from 'react-icons/io5'
import Navigation from '../components/Navigation'
import Empty from '../components/Empty'
import BillingButton from '../components/BillingButton'


function SalesPage(props) {
  const { sales } = useContext(ClientsContext);

  return (
    <>
      <main className={props.isMobile ? "sales-main mobile" : "sales-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Vendas</h2>

        <section className="sales-list-form">
          <div className="info-field">
            <label htmlFor="">Cliente</label>
            <input type="text" placeholder='ex: João' />
          </div>

          <div className="info-field">
            <label htmlFor="">Produto</label>
            <input type="text" placeholder='ex: Paçoca' />
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
            {
              sales.length > 0 
                ? sales.map((sale) => (
                  <li key={sale.id}>
                    <div>{sale.client}</div>
                    <div>{sale.product}</div>
                    <div>{sale.value}</div>
                    <div>{sale.date}</div>
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

export default SalesPage