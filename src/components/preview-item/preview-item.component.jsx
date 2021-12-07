import React from 'react';

import './preview-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const PreviewItem = ({ name, price, imageUrl }) => {
  return (
    <div className='preview-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='preview-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted={true}>Add to Cart</CustomButton>
    </div>
  );
};

export default React.memo(PreviewItem, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
