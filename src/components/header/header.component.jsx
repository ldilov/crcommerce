import React from 'react';

import { connect } from 'react-redux';
import { selectCartHidden, selectCurrentUser } from '../../redux/user/user.selectors';

// Components
import NavbarButton from '../navbar-button/navbar-button.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

// Styled components
import { HeaderContainer, LogoContainer, OptionsContainer } from './header.styles';

const Header = ({ currentUser, isCartHidden }) => {
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
        <CartIcon />
      </OptionsContainer>

      {isCartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

const shouldMemoizeFunction = (prev, next) => {
  return (
    prev.currentUser?.email === next.currentUser?.email && prev.isCartHidden === next.isCartHidden
  );
};

export default connect(mapStateToProps)(React.memo(Header, shouldMemoizeFunction));
