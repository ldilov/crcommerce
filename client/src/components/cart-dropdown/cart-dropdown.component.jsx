import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import withRouter from '../hocs/withRouter';

import CartItemComponent from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  CartDropdownContainer,
  CartItemsContainer,
  TextEmptyMessage
} from './cart-dropdown.styles';
import { forwardRef } from 'react';

const CartDropdown = (props, ref) => {
  const { cartItems, navigate, dispatch } = props;
  const items = cartItems.map((item) => <CartItemComponent item={item} key={item.id} />);

  return (
    <CartDropdownContainer ref={ref}>
      <CartItemsContainer>
        {items.length > 0 ? items : <TextEmptyMessage>Cart is empty</TextEmptyMessage>}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const composed = compose(
  withRouter,
  connect(mapStateToProps, null, null, { forwardRef: true }),
  forwardRef
);

export default composed(CartDropdown);
