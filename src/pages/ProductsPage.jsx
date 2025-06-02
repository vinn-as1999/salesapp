import {useState} from 'react'
import Navigation from '../components/Navigation'
import { IoCheckmarkCircle } from 'react-icons/io5'

function ProductsPage(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const fieldClassName = name ? 'info-field has-content' : 'info-field';

  return (
    <>
      <main className={props.isMobile ? "products-main mobile" : "products-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Produtos</h2>

        <section className="products-list">
          <form className='products-list-form'>
            <div className={fieldClassName}>
              <label>Categoria</label>
              <input autoFocus={true} 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder='ex: Doces' />
            </div>

            <div className={fieldClassName}>
              <label>Produto</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder='ex: Paçoca' />
            </div>

            <div className={fieldClassName}>
              <label>Valor</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                placeholder='ex: 1.00' />
            </div>

            <div className={fieldClassName}>
              <label>Quantidade</label>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder='ex: 10' />
            </div>

            <div className="save-field">
              <label>Registrar</label>
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

