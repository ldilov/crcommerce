import { connect } from 'react-redux';

import { addItem, decreaseQuantity, removeItem } from '../../redux/cart/cart.actions';
import {
  CartValueText,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Text
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, increaseItemQty, decreaseItemQty }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='image-item' />
      </ImageContainer>
      <Text>{name}</Text>
      <Quantity>
        <div className='arrow' onClick={() => decreaseItemQty(cartItem)}>
          &#10094;
        </div>
        <CartValueText> {quantity} </CartValueText>
        <div className='arrow' onClick={() => increaseItemQty(cartItem)}>
          &#10095;
        </div>
      </Quantity>
      <Text>{price}</Text>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10006;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItem(item)),
  increaseItemQty: (item) => dispatch(addItem(item)),
  decreaseItemQty: (item) => dispatch(decreaseQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
