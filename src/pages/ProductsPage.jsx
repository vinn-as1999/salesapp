import { useState, useContext } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { ProductsContext } from '../contexts/ProductsContext'
import Navigation from '../components/Navigation'
import BillingButton from '../components/BillingButton'
import Empty from '../components/Empty'
import EditionMenu from '../components/EditionMenu'

function ProductsPage(props) {
  const [id, token] = [localStorage.getItem("id"), localStorage.getItem("token")]
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const {products, setProducts} = useContext(ProductsContext);

  const [serverMessage, setServerMessage] = useState('');
  const [error, setError] = useState(false);

  const [errors, setErrors] = useState({
    category: false,
    name: false,
    price: false,
    quantity: false
  });

  const categoryClassName = category ? 'info-field has-content' : 'info-field';
  const nameClassName = name ? 'info-field has-content' : 'info-field';
  const priceClassName = price ? 'info-field has-content' : 'info-field';
  const quantityClassName = quantity ? 'info-field has-content' : 'info-field';


  async function registerProduct(event) {
    event.preventDefault();

    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseInt(quantity);

    const newErrors = {
      category: !category.trim(),
      name: !name.trim(),
      price: isNaN(parsedPrice) || parsedPrice <= 0,
      quantity: isNaN(parsedQuantity) || parsedQuantity < 0
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    const requestBody = {
      id,
      category,
      name,
      price,
      quantity
    }

    const response = await fetch("http://localhost:5152/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    const message = data.message;

    if (!response.ok) {
      setServerMessage(message)
      setError(true);
      return;
    }

    setServerMessage(message);
    setError(false);
  };


  async function handleEditProduct(id) {
    console.log('editou produto');
  };


  async function handleDeleteProduct(id) {
    console.log('deletou produto');
  };


  return (
    <>
      <main className={props.isMobile ? "products-main mobile" : "products-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Produtos</h2>

        <section className="products-list">
          <form className='products-list-form' onSubmit={(e) => registerProduct(e)}>
            <div className={categoryClassName}>
              <label>Categoria</label>
              <input autoFocus={true} 
                className={errors.category ? 'errorInput' : ''}
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                placeholder='ex: Doces' />
            </div>

            <div className={nameClassName}>
              <label>Produto</label>
              <input 
                className={errors.name ? 'errorInput' : ''}
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder='ex: Paçoca' />
            </div>

            <div className={priceClassName}>
              <label>Valor</label>
              <input 
                className={errors.price ? 'errorInput' : ''}
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                placeholder='ex: 1.00' />
            </div>

            <div className={quantityClassName}>
              <label>Quantidade</label>
              <input 
                className={errors.quantity ? 'errorInput' : ''}
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder='ex: 10' />
            </div>

            <div className="save-field">
              <label>Registrar</label>
              <button type='submit' className='save'>
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
                      title={product.name}
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

