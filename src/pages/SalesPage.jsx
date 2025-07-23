import {useContext, useEffect, useState} from 'react';
import {ClientsContext} from '../contexts/ClientsContext';
import {ProductsContext} from '../contexts/ProductsContext';
import {IoCheckmarkCircle} from 'react-icons/io5';
import Navigation from '../components/Navigation';
import Empty from '../components/Empty';
import BillingButton from '../components/BillingButton';
import EditionMenu from '../components/EditionMenu';
import Dropdown from '../components/Dropdown';


function SalesPage(props) {
  const {sales, clients, searchClients} = useContext(ClientsContext);
  const {products, searchProducts} = useContext(ProductsContext);

  const [clientName, setClientName] = useState('');
  const [productName, setProductName] = useState('');

  const [clientsList, setClientsList] = useState([]);
  const [productsList, setProductsList] = useState([]);


  async function registerSale(event) {
    event.preventDefault();
    const id = localStorage.getItem("id");
    
    const requestBody = {
      name: clientName,
      product: productName
    };

    try {
      const response = await fetch(`http://localhost:5152/sales/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) return;

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  async function handleEditSale(id) {
    console.log('editou venda');
  };

  async function handleDeleteSale(id) {
    console.log('deletou venda');
  };


  useEffect(() => {
    setClientsList(searchClients(clientName));

    if (clientName === '') {
      setClientsList([]);
    }
  }, [clientName])


  useEffect(() => {
    console.log(productName)
    setProductsList(searchProducts(productName))

    if (productName === '') {
      setProductsList([]);
    }
  }, [productName])


  return (
    <>
      <main className={props.isMobile ? "sales-main mobile" : "sales-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Vendas</h2>

        <form className="sales-list-form" onSubmit={(e) => registerSale(e)}>
          <div className="info-field">
            <label htmlFor="">Cliente</label>
            <div>
              <input type="text"
                placeholder='ex: João'
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <div className='dropdown-cli'>
                <Dropdown list={clientsList} setName={setClientName} setList={setClientsList} displayKey="client" />
              </div>
            </div>
          </div>

          <div className="info-field">
            <label htmlFor="">Produto</label>
            <div>
              <input type="text"
                placeholder='ex: Paçoca'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <div className='dropdown-prod'>
                <Dropdown list={productsList} setName={setProductName} setList={setProductsList} displayKey="product" />
              </div>
            </div>
          </div>

          <div className="save-field">
            <label htmlFor="">Registrar</label>
            <button type='submit' className='save'>
              <IoCheckmarkCircle />
            </button>
          </div>
        </form>

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
                ? sales.map((sale, index) => (
                  <li 
                    key={index} 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      props.setEditSale(index);
                    }} 
                    style={{position: 'relative'}}
                  >
                    {
                      props.saleTrigger === index 
                      ? <>
                          <div><input type="text" value={sale.client} /></div>
                          <div><input type="text" value={sale.product} /></div>
                          <div><input type="text" value={sale.value} /></div>
                          <div><input type="text" value={sale.date} /></div>
                        </>

                      : <>
                          <div>{sale.client}</div>
                          <div>{sale.product}</div>
                          <div>{sale.value}</div>
                          <div>{sale.date}</div>
                        </>
                    }

                    <EditionMenu 
                      idx={index} 
                      editVariable={props.editSale} 
                      setEditFunction={props.setEditSale} 
                      edit={handleEditSale}
                      delete={handleDeleteSale}
                      trigger={props.saleTrigger}
                      setTrigger={props.setSaleTrigger}
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

export default SalesPage