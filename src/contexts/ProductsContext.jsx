import { createContext, useState } from "react";


const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Smartphone", price: 1999.90, quantity: 5 },
    { id: 2, name: "Notebook", price: 4299.90, quantity: 3 },
    { id: 3, name: "Fone de Ouvido", price: 299.90, quantity: 10 },
    { id: 4, name: "Mouse Gamer", price: 249.90, quantity: 8 },
    { id: 5, name: "Teclado Mecânico", price: 399.90, quantity: 6 },
    { id: 6, name: "Monitor 24''", price: 899.90, quantity: 4 },
    { id: 7, name: "Cadeira Gamer", price: 1299.90, quantity: 2 },
    { id: 8, name: "SSD 1TB", price: 499.90, quantity: 7 },
    { id: 9, name: "Webcam Full HD", price: 349.90, quantity: 5 },
    { id: 10, name: "Microfone USB", price: 279.90, quantity: 3 }
  ]);
  const [categories, setCategories] = useState([]);


  return (
    <ProductsContext.Provider
      value={{
        products, setProducts, 
        categories, setCategories
      }}>
      {children}
    </ProductsContext.Provider>
  )
};


export { ProductsProvider, ProductsContext }