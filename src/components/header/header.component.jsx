import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './header.styles.scss';

// Components
import NavbarButton from '../navbar-button/navbar-button.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, isCartHidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'></Link>
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    isCartHidden: state.cart.hidden
  };
};

export default connect(mapStateToProps)(React.memo(Header));
