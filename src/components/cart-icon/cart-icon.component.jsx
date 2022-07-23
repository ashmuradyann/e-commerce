import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {

  const { isCartOpen, setIsOpenCart, cartCount } = useContext(CartContext)

  const toggleIsOpenCart = () => setIsOpenCart(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleIsOpenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon