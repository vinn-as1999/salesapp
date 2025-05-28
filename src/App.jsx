import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ClientsProvider } from "./contexts/ClientsContext";
import { ProductsProvider } from "./contexts/ProductsContext";

const App = () => {
  return (
    <>
      <ClientsProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </ClientsProvider>
    </>
  )
};

export default App;