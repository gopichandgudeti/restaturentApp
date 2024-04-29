import React from 'react'

const CartContext = React.createContext({
  cartCount: 0,
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
