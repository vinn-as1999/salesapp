import React from 'react'
import Navigation from '../components/Navigation'

function ProductsPage(props) {
  return (
    <>
      <main className={props.isMobile ? "products-main mobile" : "products-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <h2>Produtos</h2>
      </main>
    </>
  )
}

export default ProductsPage