import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCartHidden, selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

// Components
import NavbarButton from '../navbar-button/navbar-button.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, isCartHidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/' />
      <div className='options'>
        <NavbarButton name='shop' uri='shop' />
        <NavbarButton name='contact' uri='contact' />
        {currentUser ? (
          <NavbarButton name='sign out' uri='signout' />
        ) : (
          <NavbarButton name='sign in' uri='signin' />
        )}
        <CartIcon />
      </div>

      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

const shouldMemoizeFunction = (prev, next) => {
  console.log(prev, next);
  return (
    prev.currentUser?.email === next.currentUser?.email && prev.isCartHidden === next.isCartHidden
  );
};

export default connect(mapStateToProps)(React.memo(Header, shouldMemoizeFunction));
