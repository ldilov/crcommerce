import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='image-item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10006;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
