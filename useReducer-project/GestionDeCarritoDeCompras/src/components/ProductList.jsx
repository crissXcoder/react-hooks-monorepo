import React from 'react'
import './ProductList.css'

export function ProductList({ products, onAddToCart }) {
  const productDetails = {
    1: {
      specs: "Intel Ultra 9-185H, RTX 4090 16GB, 32GB RAM, 2TB SSD",
      brand: "ASUS ROG Zephyrus G16"
    },
    2: {
      specs: "Snapdragon 8 Elite, 16+512GB, 7050mAh, 144Hz Display",
      brand: "REDMAGIC 10 Pro"
    },
    3: {
      specs: "Snapdragon X Plus, 16GB RAM, 256GB, 13\" Touchscreen",
      brand: "Microsoft Surface Pro"
    },
    4: {
      specs: "Wireless, Noise Cancellation, 30h Battery, Alexa Control",
      brand: "Sony WH-1000XM5"
    },
    5: {
      specs: "GPS Fitness, AMOLED, 11-day Battery, Health Tracking",
      brand: "Garmin vívoactive 5"
    }
  }

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{productDetails[product.id].brand}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-details">
              <p>{productDetails[product.id].specs}</p>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}