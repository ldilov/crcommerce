import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { addItem, decreaseQuantity, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, increaseItemQty, decreaseItemQty }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='image-item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItemQty(cartItem)}>
          &#10094;
        </div>
        <span className='value'> {quantity} </span>
        <div className='arrow' onClick={() => increaseItemQty(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10006;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItem(item)),
  increaseItemQty: (item) => dispatch(addItem(item)),
  decreaseItemQty: (item) => dispatch(decreaseQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
