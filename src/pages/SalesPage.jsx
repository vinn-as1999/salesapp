import {useContext, useEffect, useState} from 'react';
import {ClientsContext} from '../contexts/ClientsContext';
import {ProductsContext} from '../contexts/ProductsContext';
import {IoCheckmarkCircle} from 'react-icons/io5';
import Navigation from '../components/Navigation';
import Empty from '../components/Empty';
import BillingButton from '../components/BillingButton';
import EditionMenu from '../components/EditionMenu';
import Dropdown from '../components/Dropdown';
import ServerMessage from '../components/ServerMessage';


const token = localStorage.getItem("token");

function SalesPage(props) {
  const date = new Date().toLocaleDateString();
  const {sales, setSales, searchClients} = useContext(ClientsContext);
  const {products, searchProducts} = useContext(ProductsContext);

  const [clientName, setClientName] = useState('');
  const [productName, setProductName] = useState('');

  // edition fields
  const [newClientName, setNewClientName] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDate, setNewDate] = useState('');

  const [clientsList, setClientsList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [serverMessage, setServerMessage] = useState(null);
  const [error, setError] = useState(false);


  async function registerSale(event) {
    event.preventDefault();

    if (!clientName.trim() || !productName.trim()) return;

    const prod = products.find(prod => prod.product === productName);

    if (!prod) return;
    
    const requestBody = {
      client: clientName,
      product: productName,
      price: prod?.price,
      date: date,
      status: 'pending'
    };

    console.log("corpo adicionado: ", requestBody)

    setSales(prev => [...prev, requestBody]);

    try {
      const response = await fetch(`http://localhost:5152/sales`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      setServerMessage(data.message);

      if (!response.ok) {
        setError(true);
        setSales(prev => {
          prev.slice(0, -1)
          return prev
        });

        return;
      }

      setSales(prev => {
        const lastSale = prev[prev.length - 1];
        lastSale._id = data.sale_id;
        return [...prev];
      });

    } catch (error) {
      console.error(error);
    }
  };


  async function handleEditSale(id) {
    if (!id) {
      return;
    }

    setSales(
      prevSales => prevSales.map(
        sale => sale._id === id
          ? {
              ...sale, 
              client: newClientName,
              product: newProductName,
              value: newPrice,
              date: newDate
            }
          : sale
      )
    );

    try {
      const response = await fetch(`http://localhost:5152/sales/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          client: newClientName,
          product: newProductName,
          price: newPrice,
          date: newDate
        })
      });

      const data = await response.json();
      setServerMessage(data.message);

    } catch (error) {
      console.error(error);
      setSales(prevSales => prevSales.filter(sale => sale._id !== id));
    }
  };


  async function handleDeleteSale(id) {
    if (!id) {
      console.log(id)
      return;
    }

    try {
      const response = await fetch(`http://localhost:5152/sales/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        setError(true);
        return;
      }

      setServerMessage(data.message);
      setError(false);
      setSales(prevSales => prevSales.filter(sale => sale._id !== id));

    } catch (error) {
      console.log(error);
      setError(true);
      setServerMessage("Erro inesperado ocorreu. Tente novamente.");
    }
  };


  useEffect(() => {
    setClientsList(searchClients(clientName));

    if (!clientName.trim()) {
      setClientsList([]);
    }
  }, [clientName]);


  useEffect(() => {
    setProductsList(searchProducts(productName))

    if (!productName.trim()) {
      setProductsList([]);
    }
  }, [productName]);


  useEffect(() => {
    console.log('sales: ', sales);
    if (serverMessage) {
      const timer = setTimeout(() => {
        setServerMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [serverMessage]);


  return (
    <>
      <main className={props.isMobile ? "sales-main mobile" : "sales-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Vendas</h2>

        <form className="sales-list-form" onSubmit={(e) => registerSale(e)}>
          <div className="info-field">
            <label>Cliente</label>
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

          {
            serverMessage ? <ServerMessage message={serverMessage} error={error} /> : null
          }

          <div className="info-field">
            <label>Produto</label>
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
            <label>Registrar</label>
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
                      setNewClientName(sale.client);
                      setNewProductName(sale.product);
                      setNewPrice(sale.price);
                      setNewDate(sale.date);
                    }} 
                    style={{position: 'relative'}}
                  >
                    {
                      props.saleTrigger === index 
                      ? <>
                          <div>
                            <input type="text" value={newClientName} onChange={(e) => setNewClientName(e.target.value)} />
                          </div>
                          <div>
                            <input type="text" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
                          </div>
                          <div>
                            <input type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                          </div>
                          <div>
                            <input type="text" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                          </div>
                        </>

                      : <>
                          <div>{sale.client}</div>
                          <div>{sale.product}</div>
                          <div>R$ {sale.price.toFixed(2)}</div>
                          <div>{sale.date}</div>
                        </>
                    }

                    <EditionMenu 
                      idx={index} 
                      saleId={sale._id}
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