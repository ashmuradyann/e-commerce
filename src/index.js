import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { UserProvider } from './contexts/user.context'
import { ProductsProvider } from './contexts/products.context'
import { CartProvider } from './contexts/cart.context'

import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
)