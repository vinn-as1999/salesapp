import {createContext, useEffect, useState} from "react";


const ProductsContext = createContext();

const ProductsProvider = ({children, isLoggedIn}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  async function getProducts(id) {
    if (!id) id = localStorage.getItem("id");

    try {
      const response = await fetch(`http://localhost:5152/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) return;

      const data = await response.json();

      console.log(data);
      setProducts(data);

    } catch (error) {
      console.error(error);
    }
  };


  function searchProducts(name) {
    return products.filter(product => 
      product.product.toLowerCase()
        .includes(name.toLowerCase())
    )
  };


  useEffect(() => {
    if (isLoggedIn)
      getProducts(localStorage.getItem('id'))
  }, [isLoggedIn]);


  return (
    <ProductsContext.Provider
      value={{
        products, setProducts, 
        categories, setCategories,
        getProducts, searchProducts
      }}>
      {children}
    </ProductsContext.Provider>
  )
};


export { ProductsProvider, ProductsContext }