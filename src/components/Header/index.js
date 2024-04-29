import CartContext from '../../context/CartContext'
import './index.css'

const Header = () => {
  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartCount} = value

        return <p>{cartCount}</p>
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-container">
      <h1 className="cafe-name">UNI Resto Cafe</h1>
      <div>
        <p>Cart</p>
        <div className="cart-count-container">{renderCartItemsCount}</div>
      </div>
    </nav>
  )
}

export default Header
