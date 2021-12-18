import { connect } from 'react-redux';

import CartItemComponent from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  const items = cartItems.map((item) => <CartItemComponent item={item} key={item.id} />);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{items}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
