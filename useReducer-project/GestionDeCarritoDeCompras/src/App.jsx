import React, { useReducer } from 'react'
import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { 
  cartReducer, 
  initialState, 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  CLEAR_CART 
} from './reducers/cartReducer'
import './App.css'

// Lista simple de productos
const products = [
  { id: 1, name: 'Laptop', price: 3500 },
  { id: 2, name: 'Smartphone', price: 750 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Headphones', price: 350 },
  { id: 5, name: 'Smartwatch', price: 275 }
]

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  const handleAddToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product })
  }

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId })
  }

  const handleClearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <div className="app-container">
      <div className="shopping-app">
        <ProductList 
          products={products} 
          onAddToCart={handleAddToCart} 
        />
        <Cart 
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />
      </div>
    </div>
  )
}

export default App