import React from 'react'
import Navigation from '../components/Navigation'
import { SiPanasonic } from 'react-icons/si'
import { IoCheckmarkCircle } from 'react-icons/io5'

function ProductsPage(props) {
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [quantity, setQuantity] = React.useState(0)
  const [category, setCategory] = React.useState('')
  const [description, setDescription] = React.useState('')

  return (
    <>
      <main className={props.isMobile ? "products-main mobile" : "products-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Produtos</h2>

        <section className="products-list">
          <form className='products-list-form'>
            <div className={`info-field ${name ? 'has-content' : ''}`}>
              <label htmlFor="">Produto</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={`info-field ${price ? 'has-content' : ''}`}>
              <label htmlFor="">Valor</label>
              <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>

            <div className={`info-field ${quantity ? 'has-content' : ''}`}>
              <label htmlFor="">Quantidade</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>

            <div className="save-field">
              <label htmlFor="">Registrar</label>
              <button className='save'>
                <IoCheckmarkCircle />
              </button>
            </div>
          </form>

          <h3>Doces</h3>
          <ul>
            <li>
              <span>Produto</span>
              <span>Valor</span>
              <span>Qtd.</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ProductsPage

