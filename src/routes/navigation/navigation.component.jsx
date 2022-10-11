import { Fragment, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as="span" className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
            </NavigationContainer>
            {isCartOpen && <CartDropdown />}
            <Outlet />
        </Fragment>
    )
}

export default Navigation