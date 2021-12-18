import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect, useSelector } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartQuantity =
    cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartQuantity}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
