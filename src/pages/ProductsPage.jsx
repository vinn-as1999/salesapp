import { useState, useContext } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { ProductsContext } from '../contexts/ProductsContext'
import Navigation from '../components/Navigation'
import BillingButton from '../components/BillingButton'
import Empty from '../components/Empty'
import EditionMenu from '../components/EditionMenu'

function ProductsPage(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const { products, setProducts } = useContext(ProductsContext);
  const fieldClassName = name ? 'info-field has-content' : 'info-field';


  async function handleEditProduct(id) {
    console.log('editou produto');
  }

  async function handleDeleteProduct(id) {
    console.log('deletou produto');
  }


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
              <span>Quantidade</span>
            </li>
            {
              products.length > 0
                ? products.map(product => (
                    <li 
                      key={product.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        props.setEditProduct(product.id);
                      }}
                      style={{position: 'relative'}}
                    >
                      {
                        props.productTrigger === product.id
                          ? <div className='edit-field'>
                              <div>
                                <input className='edit-input' type="text" value={product.name} />
                              </div>
                              <div>
                                <input className='edit-input' type="text" value={product.price} />
                              </div>
                              <div>
                                <input className='edit-input' type="text" value={product.quantity} />
                              </div>
                            </div>
                          : <>
                              <div>{product.name}</div>
                              <div>{product.price}</div>
                              <div>{product.quantity}</div>
                            </>
                      }

                      <EditionMenu 
                        id={product.id} 
                        editVariable={props.editProduct} 
                        setEditFunction={props.setEditProduct}
                        edit={handleEditProduct}
                        delete={handleDeleteProduct}
                        trigger={props.productTrigger}
                        setTrigger={props.setProductTrigger}
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

export default ProductsPage

