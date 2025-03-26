import React from 'react'
import { useProductFilter } from '../hooks/useProductFilter'
import './ProductFilter.css'

export function ProductFilter() {
  // Lista inicial de productos
  const initialProducts = [
    { id: 1, name: 'Laptop', price: 3500 },
    { id: 2, name: 'Smartphone', price: 750 },
    { id: 3, name: 'Tablet', price: 300 },
    { id: 4, name: 'Headphones', price: 350 },
    { id: 5, name: 'Smartwatch', price: 275 }
  ]

  // Uso de custom hook para filtrar productos
  const { searchTerm, setSearchTerm, filteredProducts } = useProductFilter(initialProducts)

  return (
    <div className="product-filter-container">
      <h1>Product Filter with useMemo</h1>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <span>{product.name}</span>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}