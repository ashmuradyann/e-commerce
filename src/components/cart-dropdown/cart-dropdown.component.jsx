import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { setCartOpen } from '../../store/cart/cart.action'

import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    dispatch(setCartOpen(false))
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length
            ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
            : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown