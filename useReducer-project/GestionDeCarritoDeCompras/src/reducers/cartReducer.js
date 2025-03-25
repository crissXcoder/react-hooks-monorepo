export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const CLEAR_CART = 'CLEAR_CART'

// Estado inicial
export const initialState = {
  items: [],
  total: 0
}

// Funcion reductora
export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      // Revisa si el producto ya existe en el carrito
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload.idn
      )

      if (existingProductIndex > -1) {
        // Si el producto existe, aumenta la cantidad
        const updatedItems = [...state.items]
        updatedItems[existingProductIndex] = {
          ...updatedItems[existingProductIndex],
          quantity: updatedItems[existingProductIndex].quantity + 1
        }

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price
        }
      }

      // Si el producto no existe, agrega un nuevo producto
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      }

    case REMOVE_PRODUCT:
      const productToRemove = state.items.find(
        item => item.id === action.payload
      )

      if (productToRemove.quantity > 1) {
        // Si la cantidad es mayor que 1, disminuye la cantidad
        const updatedItems = state.items.map(item => 
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )

        return {
          ...state,
          items: updatedItems,
          total: state.total - productToRemove.price
        }
      }

      // Si la cantidad es 1, elimina el producto completamente
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - productToRemove.price
      }

    case CLEAR_CART:
      return initialState

    default:
      return state
  }
}