import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutHeader, CheckoutPageContainer, HeaderBlock, Total } from './checkout.styles';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <Total>
      <span>TOTAL: {cartTotal}</span>
    </Total>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);
