import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import Home from "./pages/Home";
import { UserProvider } from "./contexts/UserContext";
import { ClientsProvider } from "./contexts/ClientsContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import LoginPage from "./pages/LoginPage";
import SalesPage from "./pages/SalesPage";
import ProductsPage from "./pages/ProductsPage";
import ClientsPage from "./pages/ClientsPage";

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isLoggedIn, setIsLoggedIn] = useState(null); // null = carregando

    const [clientsTrigger, setClientsTrigger] = useState(null);
    const [saleTrigger, setSaleTrigger] = useState(null);
    const [productTrigger, setProductTrigger] = useState(null);

    const [editClient, setEditClient] = useState(null);
    const [editSale, setEditSale] = useState(null);
    const [editProduct, setEditProduct] = useState(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])
  

  return (
    <>
      <UserProvider>
        <ClientsProvider>
          <ProductsProvider isLoggedIn={isLoggedIn}>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginPage isMobile={isMobile} />} />
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
                  <Route path="/home" element={<Home isMobile={isMobile} />} />
                  <Route path="/home/clients"
                    element={<ClientsPage
                      isMobile={isMobile}
                      editClient={editClient}
                      setEditClient={setEditClient}
                      clientsTrigger={clientsTrigger}
                      setClientsTrigger={setClientsTrigger}
                    />}
                  />
                  <Route path="/home/sales"
                    element={<SalesPage
                      isMobile={isMobile}
                      editSale={editSale}
                      setEditSale={setEditSale}
                      saleTrigger={saleTrigger}
                      setSaleTrigger={setSaleTrigger}
                    />}
                  />
                  <Route path="/home/products"
                    element={<ProductsPage
                      isMobile={isMobile}
                      editProduct={editProduct}
                      setEditProduct={setEditProduct}
                      productTrigger={productTrigger}
                      setProductTrigger={setProductTrigger}
                    />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </ProductsProvider>
        </ClientsProvider>
      </UserProvider>
    </>
  )
};

export default App;