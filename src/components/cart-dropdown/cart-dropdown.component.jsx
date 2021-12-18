import { connect } from 'react-redux';

import CartItemComponent from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  console.log('RENDERRR');
  const items = cartItems.map((item) => <CartItemComponent item={item} key={item.id} />);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{items}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('Calling');
  return {
    cartItems: selectCartItems(state)
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
