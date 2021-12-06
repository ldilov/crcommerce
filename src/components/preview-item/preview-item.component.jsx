import React from 'react';

import './preview-item.styles.scss';

const PreviewItem = ({ name, price, imageUrl }) => {
  return (
    <div className='preview-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='preview-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default React.memo(PreviewItem, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
