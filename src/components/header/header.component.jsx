import React, { useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import { selectCartHidden, selectCurrentUser } from '../../redux/user/user.selectors';

// Components
import NavbarButton from '../navbar-button/navbar-button.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

// Styled components
import { HeaderContainer, LogoContainer, OptionsContainer } from './header.styles';
import { setCartHidden } from '../../redux/cart/cart.actions';

const Header = ({ currentUser, isCartHidden, setCartHidden }) => {
  const ref = useRef();
  const refDropDown = useRef();

  useEffect(() => {
    const handler = (event) => {
      const isOutsideCartIcon = ref.current && !ref.current.contains(event.target);
      const isOutsideDropDown = refDropDown.current && !refDropDown.current.contains(event.target);

      if (event.target && isOutsideCartIcon && isOutsideDropDown) {
        setCartHidden();
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler, true);
    };
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer className='logo-container' to='/' />
      <OptionsContainer className='options'>
        <NavbarButton name='shop' uri='shop' />
        <NavbarButton name='contact' uri='contact' />
        {currentUser ? (
          <NavbarButton name='sign out' uri='signout' />
        ) : (
          <NavbarButton name='sign in' uri='signin' />
        )}
        <div ref={ref}>
          <CartIcon />
        </div>
      </OptionsContainer>

      {isCartHidden ? null : <CartDropdown ref={refDropDown} />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
  setCartHidden: () => dispatch(setCartHidden())
});

const shouldMemoizeFunction = (prev, next) => {
  return (
    prev.currentUser?.email === next.currentUser?.email && prev.isCartHidden === next.isCartHidden
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Header, shouldMemoizeFunction));
