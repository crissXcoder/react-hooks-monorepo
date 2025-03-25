import React from 'react'
import './Cart.css'

export function Cart({ cart, onRemoveFromCart, onClearCart }) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => onRemoveFromCart(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <strong>Total: ${cart.total.toFixed(2)}</strong>
            <button 
              onClick={onClearCart}
              className="clear-cart-btn"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}