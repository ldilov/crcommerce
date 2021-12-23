import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartIconContainer, ShoppingIconContainer, TextCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <TextCount>{itemCount}</TextCount>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
