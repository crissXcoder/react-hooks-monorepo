import { useState, useMemo } from 'react'

export function useProductFilter(initialProducts) {
  const [searchTerm, setSearchTerm] = useState('')
  const [products] = useState(initialProducts)

  // Usamos useMemo para evitar que se ejecute la función de filtrado en cada renderizado
  // de nuestro componente, solo se ejecutará cuando cambie la lista de productos o el término de búsqueda
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...')
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [products, searchTerm])

  return { 
    searchTerm, 
    setSearchTerm, 
    filteredProducts 
  }
}