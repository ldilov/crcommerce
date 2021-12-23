import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

const CartDropdown = ({ cartItems, navigate, dispatch }) => {
  const items = cartItems.map((item) => <CartItemComponent item={item} key={item.id} />);

  return (
    <CartDropdownContainer>
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

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
