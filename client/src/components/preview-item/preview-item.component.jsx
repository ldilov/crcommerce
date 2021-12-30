import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

// Custom components
import {
  CustomButtonContainer,
  ImageContainer,
  NameText,
  PreviewFooter,
  PreviewItemContainer,
  PriceText
} from './preview-item.styles';

const PreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <PreviewItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <PreviewFooter>
        <NameText>{name}</NameText>
        <PriceText>{price}</PriceText>
      </PreviewFooter>
      <CustomButtonContainer onClick={() => addItem(item)} inverted={true}>
        Add to Cart
      </CustomButtonContainer>
    </PreviewItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

const memoizeFunction = (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
};

export default React.memo(connect(null, mapDispatchToProps)(PreviewItem), memoizeFunction);
