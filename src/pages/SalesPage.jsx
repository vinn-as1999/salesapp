import { useContext, useEffect, useState } from 'react'
import { ClientsContext } from '../contexts/ClientsContext'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { IoMdCloseCircle } from "react-icons/io"
import { FaTrash } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md"
import Navigation from '../components/Navigation'
import Empty from '../components/Empty'
import BillingButton from '../components/BillingButton'


function SalesPage(props) {
  const { sales } = useContext(ClientsContext);
  const [editSale, setEditSale] = useState(null);


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
                  <li 
                    key={sale.saleId} 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setEditSale(sale.saleId)
                    }} 
                    style={{position: 'relative'}}>
                    <div>{sale.client}</div>
                    <div>{sale.product}</div>
                    <div>{sale.value}</div>
                    <div>{sale.date}</div>

                    <span className={editSale === sale.saleId ? 'edit' : 'hidden'}>
                      <MdModeEdit className='edit-bttn' size={30} />
                      <FaTrash className='delete-bttn' size={30} />
                      <IoMdCloseCircle className='close-bttn' size={30} onClick={(e) => {
                        e.stopPropagation();
                        setEditSale(null);
                      }} />
                    </span>
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