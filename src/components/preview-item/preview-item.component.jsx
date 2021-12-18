import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

// Styles
import './preview-item.styles.scss';

// Custom components
import CustomButton from '../custom-button/custom-button.component';

const PreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='preview-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='preview-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted={true}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

const memoizeFunction = (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
};

export default React.memo(connect(null, mapDispatchToProps)(PreviewItem), memoizeFunction);
