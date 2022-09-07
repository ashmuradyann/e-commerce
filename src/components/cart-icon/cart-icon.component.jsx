import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {

  const { isCartOpen, setIsOpenCart, cartCount } = useContext(CartContext)

  const toggleIsOpenCart = () => setIsOpenCart(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsOpenCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon