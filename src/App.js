import {Component} from 'react'
import CartContext from './context/CartContext'
import Header from './components/Header'

import './App.css'

// write your code here

class App extends Component {
  state = {
    cartCount: 0,
  }

  incrementCartItemQuantity = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
    }))
  }

  decrementCartItemQuantity = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount - 1,
    }))
  }

  render() {
    const {cartCount} = this.state

    return (
      <CartContext.Provider
        value={{
          cartCount,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Header />
      </CartContext.Provider>
    )
  }
}

export default App
