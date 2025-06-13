import { createContext, useState } from "react";


const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
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