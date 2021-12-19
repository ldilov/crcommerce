import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import withRouter from '../hocs/withRouter';

import CartItemComponent from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, navigate, dispatch }) => {
  const items = cartItems.map((item) => <CartItemComponent item={item} key={item.id} />);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.length > 0 ? items : <span className='empty-message'>Cart is empty</span>}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
