import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItemComponent from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartDropdown);
