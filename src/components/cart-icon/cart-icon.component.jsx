import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setCartOpen } from '../../store/cart/cart.action'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {

  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsOpenCart = () => dispatch(setCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsOpenCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon