import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ClientsProvider } from "./contexts/ClientsContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import SalesPage from "./pages/SalesPage";
import ProductsPage from "./pages/ProductsPage";
import ClientsPage from "./pages/ClientsPage";

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      <ClientsProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home isMobile={isMobile} />} />
              <Route path="/clients" element={<ClientsPage isMobile={isMobile} />} />
              <Route path="/sales" element={<SalesPage isMobile={isMobile} />} />
              <Route path="/products" element={<ProductsPage isMobile={isMobile} />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </ClientsProvider>
    </>
  )
};

export default App;