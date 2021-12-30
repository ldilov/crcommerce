import { CartItemContainer, ImgContainer, ItemDetailsContainer, Text } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ImgContainer src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <Text>{name}</Text>
        <Text>
          {quantity} x {price}$
        </Text>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
